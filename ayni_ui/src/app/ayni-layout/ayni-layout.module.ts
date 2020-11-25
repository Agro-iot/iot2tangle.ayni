import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AyniLayoutComponent } from './ayni-layout.component';
import { LayoutModule } from 'src/@uni/layout/layout.module';
import { ToolbarModule } from 'src/@uni/layout/toolbar/toolbar.module';
import { SidenavModule } from 'src/@uni/layout/sidenav/sidenav.module';
import { InicioModule } from '../pages/inicio/inicio.module';



@NgModule({
  declarations: [AyniLayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ToolbarModule,
    SidenavModule,
    InicioModule,
    CommonModule
  ]
})
export class AyniLayoutModule { }
