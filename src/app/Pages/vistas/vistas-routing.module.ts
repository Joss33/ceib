import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasComponent } from './vistas.component';

const routes: Routes = [
  {
    path: '',
    component: VistasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VistasRoutingModule { }
