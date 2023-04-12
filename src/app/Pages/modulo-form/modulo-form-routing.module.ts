import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloFormComponent } from './modulo-form.component';

const routes: Routes = [
  {
    path: '',
    component: ModuloFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloFormRoutingModule { }
