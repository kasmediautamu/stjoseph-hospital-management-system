import {DecimalPipe} from '@angular/common';
import {Component,OnInit, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';

import {Observable} from 'rxjs';
import { ColumnService } from 'src/app/services/worklist/column.service';

import { COLUMNTYPE, WORKTYPE } from 'src/app/services/type';
import {WorkListService} from '../../services/worklist/worklist.service'

import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-worklist-table',
  templateUrl: 'worklist-table.component.html',
  styleUrls: ['worklist-table.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class WorklistTableComponent implements OnInit {
  worklist$:Observable<WORKTYPE[] | any>
  total$:Observable<number |any>

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | any;

  public ruleTypes = 'Select Type';
  public types = [
    {label: 'Select Type', value: 'Select Type'},
    { label: 'Direct Fix Cost', value: 'directFixCost' },
    { label: 'Direct Var Cost', value: 'directVarCost' },
    { label: 'Indirect Fix Cost', value: 'indirectFixCost' },
    { label: 'Indirect Var Cost', value: 'indirectVarCost' },
    { label: 'Total Cost', value: 'totalCost' },
    { label: 'Demographics', value: 'demographics' },
    { label: 'Payment/Adjustment', value: 'payment' },
  ];

  columns: Observable<COLUMNTYPE[]> = this.clmService.getColumns()

  constructor(public tbService:WorkListService, private clmService: ColumnService) {
    this.worklist$ = tbService.worklist$
    this.total$ = tbService.total$
    console.log(this.columns)
   }

  ngOnInit() {

    console.log(this.worklist$)
  }
  onSort({column, direction}: SortEvent | any) {
    // resetting other headers
    this.headers.forEach((header: { sortable: string; direction: string; }) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.tbService.sortColumn = column;
    this.tbService.sortDirection = direction;
  }

}
