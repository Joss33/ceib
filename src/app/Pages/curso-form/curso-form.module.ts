import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoFormRoutingModule } from './curso-form-routing.module';
import { CursoFormComponent } from './curso-form.component';


@NgModule({
  declarations: [
    CursoFormComponent
  ],
  imports: [
    CommonModule,
    CursoFormRoutingModule
  ]
})
export class CursoFormModule { }
