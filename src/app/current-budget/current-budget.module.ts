import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentBudgetPageRoutingModule } from './current-budget-routing.module';

import { CurrentBudgetPage } from './current-budget.page';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentBudgetPageRoutingModule
  ],
  declarations: [CurrentBudgetPage, CategoryComponent],
  exports: [CategoryComponent]
})
export class CurrentBudgetPageModule {}
