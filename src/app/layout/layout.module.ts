import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [
    PublicLayoutComponent,
    // PrivateLayoutComponent
  ],
  declarations: [
    PublicLayoutComponent,
    // PrivateLayoutComponent,
    // FooterComponent,
    // HeaderComponent,
    // SidebarComponent
  ]
})
export class LayoutModule { }