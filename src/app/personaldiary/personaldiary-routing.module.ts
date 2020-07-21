import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaldiaryPage } from './personaldiary.page';

const routes: Routes = [
  {
    path: '',
    component: PersonaldiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonaldiaryPageRoutingModule {}
