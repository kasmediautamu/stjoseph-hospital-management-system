import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
  ruleTypes = 'Select Type';
  types = [
    { label: 'Select Type', value: 'Select Type' },
    { label: 'Direct Fix Cost', value: 'directFixCost' },
    { label: 'Direct Var Cost', value: 'directVarCost' },
    { label: 'Indirect Fix Cost', value: 'indirectFixCost' },
    { label: 'Indirect Var Cost', value: 'indirectVarCost' },
    { label: 'Total Cost', value: 'totalCost' },
    { label: 'Demographics', value: 'demographics' },
    { label: 'Payment/Adjustment', value: 'payment' },
  ];
  navItems: { icon: string; label: string }[] = [
    { icon: '../../../assets/icons/TopMenu-Icon-New.svg', label: 'New View' },
    { icon: '../../../assets/icons/TopMenu-Icon-Edit.svg', label: 'Edit' },
    { icon: '../../../assets/icons/TopMenu-Icon-Delete.svg', label: 'Delete' },
    { icon: '../../../assets/icons/TopMenu-Icon-Apply.svg', label: 'Apply' },
    { icon: '../../../assets/icons/filter.svg', label: 'Filter' },
    { icon: '../../../assets/icons/TopMenu-Icon-Help.svg', label: 'Help' },
  ];
  collapsed: boolean = false;
  getLocation: boolean = true;
  @Output() toggleCollapse: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {
    router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: any) => {
        this.getLocation = this.router.url == '/view-administration';
      })
  }

  ngOnInit(): void {

  }

  onMenuClick() {
    this.collapsed = !this.collapsed;
    this.toggleCollapse.emit(this.collapsed)
  }

}
