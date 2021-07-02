import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-tab',
  templateUrl: './multi-tab.component.html',
  styleUrls: ['./multi-tab.component.scss']
})
export class MultiTabComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
