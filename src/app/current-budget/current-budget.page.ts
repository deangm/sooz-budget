import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './interface/category';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-current-budget',
  templateUrl: './current-budget.page.html',
  styleUrls: ['./current-budget.page.scss'],
})
export class CurrentBudgetPage implements OnInit {
  categorie$: Observable<Category[]>
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categorie$ = this.categoryService.getCategoriesObservable()
  }

}
