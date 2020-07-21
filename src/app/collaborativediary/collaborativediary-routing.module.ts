import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollaborativediaryPage } from './collaborativediary.page';

const routes: Routes = [
  {
    path: '',
    component: CollaborativediaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollaborativediaryPageRoutingModule {}
