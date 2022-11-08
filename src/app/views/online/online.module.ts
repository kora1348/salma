import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineRoutingModule } from './online-routing.module';
import { OnlineComponent } from './online.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, FormsModule, OnlineRoutingModule],
  declarations: [OnlineComponent],
})
export class OnlineModule {}



 
