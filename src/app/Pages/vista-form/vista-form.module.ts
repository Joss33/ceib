import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaFormRoutingModule } from './vista-form-routing.module';
import { VistaFormComponent } from './vista-form.component';


@NgModule({
  declarations: [
    VistaFormComponent
  ],
  imports: [
    CommonModule,
    VistaFormRoutingModule
  ]
})
export class VistaFormModule { }
