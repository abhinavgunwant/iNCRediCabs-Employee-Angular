import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpModule } from '@angular/http';
import { LoginService } from '../app/Services/login.service';
import { ApiService } from '../app/Services/api.service';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeData } from './view-employee/employeeData';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { DashComponent } from './dash/dash.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeService } from './Services/employee.service';
import { LogoutComponent } from './logout/logout.component';
import { NoSessionComponent } from './no-session/no-session.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { Employee } from './Model/employee';
import { NewAccSetupComponent } from './new-acc-setup/new-acc-setup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserCredService } from './Services/user-cred.service';
import { SetPasswordEmployeeComponent } from './set-password-employee/set-password-employee.component';
import { ForgotPasswordChangeEmployeeComponent } from './forgot-password-change-employee/forgot-password-change-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ViewEmployeeComponent,
    ViewEmployeeDetailsComponent,
    DashComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    LogoutComponent,
    NoSessionComponent,
    EditEmployeeComponent,
    NewAccSetupComponent,
    ForgotPasswordComponent,
    SetPasswordEmployeeComponent,
    ForgotPasswordChangeEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    LoginService,
    EmployeeData,
    EmployeeService,
    UserCredService,
    Location
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
