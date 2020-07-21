import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaldiaryPageRoutingModule } from './personaldiary-routing.module';

import { PersonaldiaryPage } from './personaldiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaldiaryPageRoutingModule
  ],
  declarations: [PersonaldiaryPage]
})
export class PersonaldiaryPageModule {}
