import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbudgetPageRoutingModule } from './addbudget-routing.module';

import { AddbudgetPage } from './addbudget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbudgetPageRoutingModule
  ],
  declarations: [AddbudgetPage]
})
export class AddbudgetPageModule {}
