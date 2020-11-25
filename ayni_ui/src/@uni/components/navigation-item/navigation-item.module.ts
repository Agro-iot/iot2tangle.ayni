import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationItemComponent } from './navigation-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';



@NgModule({
  declarations: [NavigationItemComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatRippleModule
  ],
  exports: [NavigationItemComponent]
})
export class NavigationItemModule { }
