import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showDetail() {
    console.log('detail displayed');
    // this.router.navigate(['restaurants']);
  }

}
