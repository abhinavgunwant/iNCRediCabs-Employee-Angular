import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { DashboardComponent }           from './dashboard/dashboard.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { ViewEmployeeComponent }        from './view-employee/view-employee.component';
import { DashComponent }                from './dash/dash.component';
import { EmployeeComponent }            from './employee/employee.component';
import { AddEmployeeComponent }         from './add-employee/add-employee.component';
import { LoginComponent }               from './login/login.component';
import { LogoutComponent }              from './logout/logout.component';
import { NoSessionComponent }           from './no-session/no-session.component';
import { EditEmployeeComponent }        from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',                  component: LoginComponent},
  { path: 'dash',                   component: DashComponent },
  { path: 'employee/view/details',  component: ViewEmployeeDetailsComponent},
  { path: 'employee/view',          component: ViewEmployeeComponent},
  { path: 'employee',               component: EmployeeComponent },
  { path: 'employee/add',           component: AddEmployeeComponent },
  { path: 'employee/edit',          component: EditEmployeeComponent},
  { path: 'logout',                 component: LogoutComponent },
  { path: 'no-session',             component: NoSessionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
