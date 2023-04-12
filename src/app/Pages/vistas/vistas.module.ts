import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistasRoutingModule } from './vistas-routing.module';
import { VistasComponent } from './vistas.component';


@NgModule({
  declarations: [
    VistasComponent
  ],
  imports: [
    CommonModule,
    VistasRoutingModule
  ]
})
export class VistasModule { }
