import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    AlertModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
