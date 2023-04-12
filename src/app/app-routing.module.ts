import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@Pages/layout/layout.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cursos',
        loadChildren: () => import('@Pages/cursos/cursos.module').then((m) => m.CursosModule),
      },
      {
        path: 'clases',
        loadChildren: () => import('@Pages/clases/clases.module').then((m) => m.ClasesModule),
      },
    ]
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@Pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
