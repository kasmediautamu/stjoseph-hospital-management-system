import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FilterAdministrationWizardComponent } from '../filter-administration-wizard/filter-administration-wizard.component';

@Component({
  selector: 'app-newview',
  templateUrl: './newview.component.html',
  styleUrls: ['./newview.component.scss']
})
export class NewviewComponent implements OnInit {
  newviewForm: FormGroup | any;
  public sites = 'multipleSites';
  public siteOptions = [
    { label: 'Multiples Sites', value: 'multipleSites' },
    { label: 'Site 2', value: 'site-2' },
    { label: 'Site 3', value: 'site-3' },
  ];
  constructor(
    private fb: FormBuilder,
    config: NgbModalConfig,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }


  ngOnInit(): void {
    this.newviewForm = this.fb.group({
      viewname: ['', Validators.required],
      description: ['', Validators.required],
      auditor: ['', Validators.required],
      followup: ['', Validators.required],
      status: ['', Validators.required],
      accountAge: ['', Validators.required],
      hiddenRecords: ['', Validators.required]
    });
  }
  addView() {
    // const view: any = {
    //   viewname: this.newviewForm.get('viewname').value,
    //   description: this.newviewForm.get('description').value,
    //   auditor: this.newviewForm.get('auditor').value,
    //   followup: this.newviewForm.get('followup').value,
    //   status: this.newviewForm.get('status').value,
    //   accountAge: this.newviewForm.get('accountAge').value,
    //   hiddenRecord: this.newviewForm.get('hiddenRecord').value
    // };
    // console.log(view);
    this.activeModal.close('View Created')
    this.openWizardModal()
  }


  openWizardModal(): void {
    this.modalService.open(FilterAdministrationWizardComponent,
      {
        modalDialogClass: 'filter-wizard',
        backdrop: true
      })
  }

}
