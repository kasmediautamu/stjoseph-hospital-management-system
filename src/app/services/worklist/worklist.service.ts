import {Injectable, PipeTransform} from '@angular/core';
import { ApiService } from '../api.service';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {WORKTYPE} from '../type';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortColumn, SortDirection} from '../../components/worklist-table/sortable.directive';

interface SearchResult {
  worklist: WORKTYPE[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(worklist: WORKTYPE[], column: SortColumn, direction: string): WORKTYPE[] {
  if (direction === '' || column === '') {
    return worklist;
  } else {
    return [...worklist].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(country: WORKTYPE, term: string, pipe: PipeTransform) {
  return country.patient_name.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(country.contract_name).includes(term)
    || pipe.transform(country.payment_status).includes(term);
}

@Injectable({providedIn: 'root'})
export class WorkListService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _worklist$ = new BehaviorSubject<WORKTYPE[]>([]);
  public WORKLISTS = []
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe, private http:ApiService) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._worklist$.next(result.worklist);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  getWorkList(): Observable <WORKTYPE[]>{
    return this.http.get<WORKTYPE[]>(this.http.endpoint('/worklist'))
  }

  get worklist$() { return this.getWorkList() }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }


  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: SortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  // TODO: make sorting search, sorting feature work on the table
  // getWORKLISTS(){
  //   this.getWorkList().subscribe(data=>{
  //     this.WORKLISTS = [...data]
  //   })
  // }
  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let worklist = sort(this.WORKLISTS , sortColumn, sortDirection);

    // 2. filter
    worklist = worklist.filter(work => matches(work, searchTerm, this.pipe));
    const total = worklist.length;

    // 3. paginate
    worklist = worklist.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({worklist, total});
  }
}
