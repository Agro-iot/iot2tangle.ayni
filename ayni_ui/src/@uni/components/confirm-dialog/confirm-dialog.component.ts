import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'uni-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class UniConfirmDialogComponent {

  public confirmTitle: string;
  public confirmMessage: string;

  constructor(
    public dialogRef: MatDialogRef<UniConfirmDialogComponent>
  ) {
  }

}
