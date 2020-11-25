import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { NavigationItemModule } from 'src/@uni/components/navigation-item/navigation-item.module';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatRippleModule,
    NavigationItemModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
