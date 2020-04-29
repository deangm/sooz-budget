import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../interface/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category
  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {}

  deleteCategory(id){
    this.categoryService.deleteCategory(id)
  }

}
