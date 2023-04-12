import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaFormRoutingModule } from './persona-form-routing.module';
import { PersonaFormComponent } from './persona-form.component';


@NgModule({
  declarations: [
    PersonaFormComponent
  ],
  imports: [
    CommonModule,
    PersonaFormRoutingModule
  ]
})
export class PersonaFormModule { }
