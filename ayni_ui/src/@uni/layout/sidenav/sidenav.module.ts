import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavItemModule } from '../../components/sidenav-item/sidenav-item.module';
import { ScrollbarModule } from '../../components/scrollbar/scrollbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SidenavItemModule,
    ScrollbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
