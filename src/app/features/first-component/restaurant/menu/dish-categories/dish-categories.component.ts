import {Component, OnInit} from '@angular/core';
import {DishService} from '../../../../../core/dish.service';

@Component({
  selector: 'ons-page',
  templateUrl: './dish-categories.component.html',
  styleUrls: ['./dish-categories.component.css']
})
export class DishCategoriesComponent implements OnInit {

  test = [{id: 2}];
  constructor(private dishService: DishService) {
  }

  ngOnInit() {
  }

  addToCart() {
    // todo: add to cart
    this.test[0].id = 10;
    this.dishService.addToCart(this.test);
    console.log(this.test);
  }

}
