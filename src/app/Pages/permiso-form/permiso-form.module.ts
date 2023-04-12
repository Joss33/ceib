import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisoFormRoutingModule } from './permiso-form-routing.module';
import { PermisoFormComponent } from './permiso-form.component';


@NgModule({
  declarations: [
    PermisoFormComponent
  ],
  imports: [
    CommonModule,
    PermisoFormRoutingModule
  ]
})
export class PermisoFormModule { }
