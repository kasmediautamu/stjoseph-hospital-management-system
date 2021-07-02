import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewAdministrationComponent } from './pages/view-administration/view-administration.component';
import { WorklistTableComponent } from './components/worklist-table/worklist-table.component';
import { MultiTabComponent } from './components/multi-tab/multi-tab.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'view-administration', component: ViewAdministrationComponent // default route after logging in
      },
      { path: 'work-list', component: WorklistTableComponent },
      { path: '', pathMatch: 'full', redirectTo: '/view-administration' }
    ]
  },
  { path: 'eor', component: MultiTabComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/view-administration' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
