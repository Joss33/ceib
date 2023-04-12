import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloFormRoutingModule } from './modulo-form-routing.module';
import { ModuloFormComponent } from './modulo-form.component';


@NgModule({
  declarations: [
    ModuloFormComponent
  ],
  imports: [
    CommonModule,
    ModuloFormRoutingModule
  ]
})
export class ModuloFormModule { }
