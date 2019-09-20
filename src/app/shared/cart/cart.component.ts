import {Component, OnInit} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui';
import {CartDetailComponent} from '../../features/first-component/cart-detail/cart-detail.component';
import {CartServiceService} from './cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalItemNumber = 0;
  totalPrice: number;

  constructor(private navigator: OnsNavigator,
              private cartService: CartServiceService) {
  }

  ngOnInit() {
    this.cartService.updateTotalPrice().subscribe(data => {
      console.log(data);
      if (data[0]) {

        this.totalPrice = data[0].id;
      }
      this.totalItemNumber = data.length;
      console.log(this.totalPrice);
    });
  }

  openCart() {
    this.navigator.element.pushPage(CartDetailComponent);

  }
}
