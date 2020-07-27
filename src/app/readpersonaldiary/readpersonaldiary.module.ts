import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadpersonaldiaryPageRoutingModule } from './readpersonaldiary-routing.module';

import { ReadpersonaldiaryPage } from './readpersonaldiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadpersonaldiaryPageRoutingModule
  ],
  declarations: [ReadpersonaldiaryPage]
})
export class ReadpersonaldiaryPageModule {}
