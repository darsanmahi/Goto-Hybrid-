import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadpersonaldiaryPage } from './readpersonaldiary.page';

const routes: Routes = [
  {
    path: '',
    component: ReadpersonaldiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadpersonaldiaryPageRoutingModule {}
