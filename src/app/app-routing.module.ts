import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/identity/identity.module').then((m) => m.IdentityModule),
  },

  {
    path: '',
    loadChildren: () => import('./views/online/online.module').then((m) => m.OnlineModule),
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
