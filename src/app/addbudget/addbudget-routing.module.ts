import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbudgetPage } from './addbudget.page';

const routes: Routes = [
  {
    path: '',
    component: AddbudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbudgetPageRoutingModule {}
