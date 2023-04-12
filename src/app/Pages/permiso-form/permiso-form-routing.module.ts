import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoFormComponent } from './permiso-form.component';

const routes: Routes = [
  {
    path: '',
    component: PermisoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoFormRoutingModule { }
