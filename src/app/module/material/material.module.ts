import { NgModule } from '@angular/core';  //model,  ChangeDetectionStrategy, Component, inject, signal 
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';
// import {
//   MAT_DIALOG_DATA,
//   MatDialog,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogRef,
//   MatDialogTitle,
// } from '@angular/material/dialog';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    // MAT_DIALOG_DATA,
    // MatDialog,
    // MatDialogActions,
    // MatDialogClose,
    // MatDialogContent,
    // MatDialogRef,
    // MatDialogTitle,
    // ChangeDetectionStrategy, Component, inject, signal
  ]
})
export class MaterialModule { }
