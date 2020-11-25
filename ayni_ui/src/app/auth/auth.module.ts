import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatBadgeModule,
    MatDividerModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AuthModule { }
