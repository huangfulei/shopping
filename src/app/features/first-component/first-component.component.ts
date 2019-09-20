import {Component, OnInit} from '@angular/core';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';

@Component({
  selector: 'ons-page',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  page = RestaurantListComponent;

  constructor() {}

  ngOnInit() {
  }

}
