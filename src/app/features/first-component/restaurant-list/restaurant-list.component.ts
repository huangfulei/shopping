import {Component, OnInit, ViewChild} from '@angular/core';
import {OnsLazyRepeat, OnsNavigator} from 'ngx-onsenui';
import {RestaurantComponent} from '../restaurant/restaurant.component';

@Component({
  selector: 'ons-page',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  title = 'Restaurants';
  listView = true;
  mapView = false;
  public items: any[];
  @ViewChild(OnsLazyRepeat, { static: false }) lazyRepeat;

  constructor(private navigator: OnsNavigator) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        msg: 'Hello!'
      });
    }
  }

  ngOnInit() {
  }

  push() {
     this.navigator.element.pushPage(RestaurantComponent, {animation: 'slide', data: {id: 'bbb'}});
  }
}
