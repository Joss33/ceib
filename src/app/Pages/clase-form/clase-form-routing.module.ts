import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from '@Pages/clases/clases.component';

const routes: Routes = [
  {
    path: '',
    component: ClasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaseFormRoutingModule { }
