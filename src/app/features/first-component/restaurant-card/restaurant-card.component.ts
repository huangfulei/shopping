import {Component, OnInit} from '@angular/core';
import {RestaurantCardServiceService} from './restaurant-card-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {

  public name: string;

  constructor(private restaurantCardService: RestaurantCardServiceService) {
  }

  ngOnInit() {
    this.restaurantCardService.getAllRestaurants().subscribe((data: any) => {
      console.log(data);
      this.name = data.results[0].name;
    });
  }

  showDetail() {
    console.log('detail displayed');
    // this.router.navigate(['restaurants']);
  }

}
