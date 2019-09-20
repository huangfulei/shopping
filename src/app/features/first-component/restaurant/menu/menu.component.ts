import {Component, OnInit, ViewChild} from '@angular/core';
import {OnsLazyRepeat, OnsNavigator} from 'ngx-onsenui';
import {DishCategoriesComponent} from './dish-categories/dish-categories.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: any[];
  @ViewChild(OnsLazyRepeat, { static: true }) lazyRepeat;

  constructor(private navigator: OnsNavigator) {
    this.items = [];
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        msg: 'Hello!'
      });
    }
  }

  ngOnInit() {
    console.log('initialised');
  }

  push() {
    this.navigator.element.pushPage(DishCategoriesComponent, {animation: 'slide', data: {id: 'bbb'}});
  }

}
