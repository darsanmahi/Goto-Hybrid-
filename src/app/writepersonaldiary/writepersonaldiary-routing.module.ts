import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WritepersonaldiaryPage } from './writepersonaldiary.page';

const routes: Routes = [
  {
    path: '',
    component: WritepersonaldiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WritepersonaldiaryPageRoutingModule {}
