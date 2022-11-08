import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SessionService } from '../../services/sessions.service';
import { IdentityRoutingModule } from './identity-routing.module';
import { IdentityComponent } from './identity.component';
import { SinginComponent } from './view/singin/singin.component';

@NgModule({
  declarations: [
    IdentityComponent,
    SinginComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IdentityRoutingModule

  ],
  providers: [
    SessionService
  ]
})
export class IdentityModule { }


 
