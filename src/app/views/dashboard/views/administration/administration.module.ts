import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { CorporateActionComponent } from './views/corporate-action/corporate-action.component';
import { AdministrationComponent } from './administration.component';


@NgModule({
  imports: [CommonModule, AdministrationRoutingModule],
  declarations: [AdministrationComponent, CorporateActionComponent],
})
export class AdministrationModule {}

