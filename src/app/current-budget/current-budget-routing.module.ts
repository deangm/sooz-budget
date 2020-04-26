import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentBudgetPage } from './current-budget.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentBudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentBudgetPageRoutingModule {}
