import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleCollapse(collapsed: boolean) {
    console.log(collapsed);
    this.navCollapsed = collapsed;
  }

}
