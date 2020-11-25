import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
