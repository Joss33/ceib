import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaFormComponent } from './persona-form.component';

const routes: Routes = [
  {
    path: '',
    component: PersonaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaFormRoutingModule { }
