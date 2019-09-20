import {Component, OnInit, ViewChild} from '@angular/core';
import {Params} from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  item = this.params.data;
  @ViewChild('segment', { static: true }) segment: any;

  constructor(private params: Params) {
    document.addEventListener('postchange', function (event) {
      console.log('postchange event', event);
    });
  }

  ngOnInit() {
  }

}
