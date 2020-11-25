import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollbarDirective } from './scrollbar.directive';



@NgModule({
  declarations: [ScrollbarDirective],
  imports: [
    CommonModule
  ],
  exports: [ScrollbarDirective]
})
export class ScrollbarModule { }
