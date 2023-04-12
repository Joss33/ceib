import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaseFormRoutingModule } from './clase-form-routing.module';
import { ClaseFormComponent } from './clase-form.component';


@NgModule({
  declarations: [
    ClaseFormComponent
  ],
  imports: [
    CommonModule,
    ClaseFormRoutingModule
  ]
})
export class ClaseFormModule { }
