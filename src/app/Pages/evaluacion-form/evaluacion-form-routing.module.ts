import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluacionFormComponent } from './evaluacion-form.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluacionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluacionFormRoutingModule { }
