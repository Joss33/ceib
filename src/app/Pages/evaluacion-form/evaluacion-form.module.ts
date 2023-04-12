import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluacionFormRoutingModule } from './evaluacion-form-routing.module';
import { EvaluacionFormComponent } from './evaluacion-form.component';


@NgModule({
  declarations: [
    EvaluacionFormComponent
  ],
  imports: [
    CommonModule,
    EvaluacionFormRoutingModule
  ]
})
export class EvaluacionFormModule { }
