import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensestrackerPage } from './expensestracker.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensestrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensestrackerPageRoutingModule {}
