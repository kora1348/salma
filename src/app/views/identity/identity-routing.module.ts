import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsActivate } from '../../core/isActivate.guard';
import { IdentityComponent } from './identity.component';
import { SinginComponent } from './view/singin/singin.component';

export const IDENTITY_ROUTES: Routes = [
  {
    path: '',
    component: IdentityComponent,
    canActivate: [IsActivate],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'singin',
      },
      {
        path: 'singin',
        component: SinginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(IDENTITY_ROUTES)],
  exports: [RouterModule],
})
export class IdentityRoutingModule {}

