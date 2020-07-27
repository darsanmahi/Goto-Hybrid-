import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritepersonaldiaryPageRoutingModule } from './writepersonaldiary-routing.module';

import { WritepersonaldiaryPage } from './writepersonaldiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritepersonaldiaryPageRoutingModule
  ],
  declarations: [WritepersonaldiaryPage]
})
export class WritepersonaldiaryPageModule {}
