import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensestrackerPageRoutingModule } from './expensestracker-routing.module';

import { ExpensestrackerPage } from './expensestracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensestrackerPageRoutingModule
  ],
  declarations: [ExpensestrackerPage]
})
export class ExpensestrackerPageModule {}
