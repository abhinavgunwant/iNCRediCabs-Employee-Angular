import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { DashboardComponent }           from './dashboard/dashboard.component';
//import { AddtodoComponent }             from './addtodo/addtodo.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { ViewEmployeeComponent }        from './view-employee/view-employee.component';
import { DashComponent }                from './dash/dash.component';
import { EmployeeComponent }            from './employee/employee.component';
import { AddEmployeeComponent }         from './add-employee/add-employee.component';
import { LoginComponent }               from './login/login.component';
import { LogoutComponent }              from './logout/logout.component';
import { NoSessionComponent }           from './no-session/no-session.component';
import { EditEmployeeComponent }        from './edit-employee/edit-employee.component';
import { UnscheduledRequestComponent }    from  './unscheduled-request/unscheduled-request.component';
import { ReportComponent } from './report/report.component';
import { NewAccSetupComponent }         from './new-acc-setup/new-acc-setup.component';
import { ForgotPasswordComponent }      from './forgot-password/forgot-password.component';
import { SetPasswordEmployeeComponent } from './set-password-employee/set-password-employee.component';
import { ForgotPasswordChangeEmployeeComponent } from './forgot-password-change-employee/forgot-password-change-employee.component';
import { ShowRouteComponent } from './show-route/show-route.component';
import { RosterViewComponent } from './roster-view/roster-view.component';
import { AddempComponent } from './addemp/addemp.component';
import { RosterEmpDetailComponent } from './roster-emp-detail/roster-emp-detail.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { EmployeditComponent } from './employedit/employedit.component';
import { EditRouteComponent } from './edit-route/edit-route.component';

const routes: Routes = [
  { path: '', redirectTo: '/login',   pathMatch: 'full' },
  { path: 'login',                    component: LoginComponent},
  { path: 'new-acc-setup',            component: NewAccSetupComponent},
  {
    path:       'new-acc-setup/set-password/:qlid/:token',
    component:  SetPasswordEmployeeComponent
  },
  {
    path:       'forgot-password/set-password/:qlid/:token',
    component:  ForgotPasswordChangeEmployeeComponent
  },
  { path: 'dash',                     component: DashComponent },
  // { path: 'addtodos',               component: AddtodoComponent },
  { path: 'forgot-password',          component: ForgotPasswordComponent },
  { path: 'employee/view/details',    component: ViewEmployeeDetailsComponent},
  { path: 'employee/view',            component: ViewEmployeeComponent},
  { path: 'employee',                 component: EmployeeComponent },
  { path: 'employee/add',             component: AddEmployeeComponent },
  { path: 'employee/edit',            component: EditEmployeeComponent},
  { path: 'logout',                   component: LogoutComponent },
  { path: 'unscheduledRequest',       component: UnscheduledRequestComponent },
  { path: 'no-session',               component: NoSessionComponent},
  { path: 'report',                   component:ReportComponent},
  { path: 'roster/view',              component: RosterViewComponent },
  { path: 'roster/addEmp',            component:AddempComponent},
  { path: 'roster/go',                component:ShowRouteComponent},
  { path: 'roster/chl',               component:RosterEmpDetailComponent},
  { path: 'roster/addRoute',          component:AddRouteComponent},
  { path: 'roster/editemp',           component:EmployeditComponent},
  { path: 'roster/editroute',         component:EditRouteComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
