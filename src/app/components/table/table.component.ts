import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ViewAdmin } from '../../models/view-admin';
import { ViewAdminService } from '../../services/view-admin.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  page: number = 1;
  pageSize: number = 5;
  entries: Observable<ViewAdmin[]> | undefined

  constructor(private viewAdminService: ViewAdminService) {
  }

  paginateEntries() {
    // this.entries.map((entry, index) => ({ id: index + 1, ...entry })).slice(
    //   (this.page - 1) * this.pageSize,
    //   (this.page - 1) * this.pageSize + this.pageSize
    // );
    // this.entries = this.entries.pipe(
    //   map((entry, index) => ({ id: index + 1, ...entry})).slice(
    //       (this.page - 1) * this.pageSize,
    //       (this.page - 1) * this.pageSize + this.pageSize
    // )
    // )
  }

  ngOnInit(): void {
    // this.viewAdminService.getAllEntries().subscribe((response: any[]) => {
    //   this.entries = response;
    //   this.paginateEntries();
    // });
    this.entries = this.viewAdminService.getAllEntries()
  }
}
