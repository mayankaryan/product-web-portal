import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}

