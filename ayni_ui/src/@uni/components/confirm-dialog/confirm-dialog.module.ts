import { NgModule } from '@angular/core';
import { UniConfirmDialogComponent } from './confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [UniConfirmDialogComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    UniConfirmDialogComponent
],
})
export class UniConfirmDialogModule { }
