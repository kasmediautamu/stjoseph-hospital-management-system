import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state/state.service';
import { STATETYPE } from 'src/app/services/type';

@Component({
  selector: 'app-filter-administration-wizard',
  templateUrl: './filter-administration-wizard.component.html',
  styleUrls: ['./filter-administration-wizard.component.scss']
})
export class FilterAdministrationWizardComponent implements OnInit {
  wizardForm: FormGroup | any;
  public rulesCategories = 'Select a Category';
  public categories = [
    { label: 'Select a Category', value: 'Select a Category' },
    { label: 'Audit Tracking', value: 'auditTracking' },
    { label: 'Billing Info', value: 'billingInfo' },
    { label: 'Calculations', value: 'calculations' },
    { label: 'Cost', value: 'cost' },
    { label: 'Demographics', value: 'demographics' },
    { label: 'Payment/Adjustment', value: 'payment' },
  ];

  public ruleTypes = 'Select Type';
  public types = [
    { label: 'Select Type', value: 'Select Type' },
    { label: 'Direct Fix Cost', value: 'directFixCost' },
    { label: 'Direct Var Cost', value: 'directVarCost' },
    { label: 'Indirect Fix Cost', value: 'indirectFixCost' },
    { label: 'Indirect Var Cost', value: 'indirectVarCost' },
    { label: 'Total Cost', value: 'totalCost' },
    { label: 'Demographics', value: 'demographics' },
    { label: 'Payment/Adjustment', value: 'payment' },
  ];
  columns: Observable<STATETYPE[]> = this.stService.getStates()
  constructor(
    private fb: FormBuilder,
    private stService: StateService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.wizardForm = this.fb.group({
      viewname: ['', Validators.required],

    });
  }
  filterAdmin() {
    console.log('wizard is clicked')
    this.stService.viewAdmin = true;
    this.activeModal.close('wizard complete')
  }
}
