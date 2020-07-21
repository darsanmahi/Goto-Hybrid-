import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollaborativediaryPageRoutingModule } from './collaborativediary-routing.module';

import { CollaborativediaryPage } from './collaborativediary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollaborativediaryPageRoutingModule
  ],
  declarations: [CollaborativediaryPage]
})
export class CollaborativediaryPageModule {}
