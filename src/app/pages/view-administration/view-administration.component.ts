import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewviewComponent } from 'src/app/components/newview/newview.component';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state/state.service';


@Component({
  selector: 'app-view-administration',
  templateUrl: './view-administration.component.html',
  styleUrls: ['./view-administration.component.scss']
})
export class ViewAdministrationComponent implements OnInit {
  default = true;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public appState:StateService

  ) { }

  ngOnInit(): void {
  }

  openNewViewModal(): void {
    this.modalService.open(NewviewComponent,
      {
        modalDialogClass: 'new-view',
        backdrop: true
      })
  }

}
