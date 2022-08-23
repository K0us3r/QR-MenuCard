import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurentsPageRoutingModule } from './restaurents-routing.module';

import { RestaurentsPage } from './restaurents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurentsPageRoutingModule
  ],
  declarations: [RestaurentsPage]
})
export class RestaurentsPageModule {}
