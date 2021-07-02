import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewAdministrationComponent } from './pages/view-administration/view-administration.component';
import { NewviewComponent } from './components/newview/newview.component';
import { DropdownModule } from './shared/directives/dropdown/dropdown.module';
import { SelectModule } from './shared/select/select.module';
import { FilterAdministrationWizardComponent } from './components/filter-administration-wizard/filter-administration-wizard.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { WorklistTableComponent } from './components/worklist-table/worklist-table.component';
import { DecimalPipe } from '@angular/common';
import { MultiTabComponent } from './components/multi-tab/multi-tab.component';

@NgModule({

  declarations: [
    AppComponent,
    SidenavComponent,
    NavigationComponent,
    DashboardComponent,
    SvgIconComponent,
    LoginComponent,
    ViewAdministrationComponent,
    NewviewComponent,
    TableComponent,
    FilterAdministrationWizardComponent,
    CheckboxComponent,
    WorklistTableComponent,
    MultiTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    DropdownModule,
    SelectModule,
    HttpClientModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
