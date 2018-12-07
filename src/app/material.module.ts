import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule

  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule
  ]
})

export class MaterialModule { }
