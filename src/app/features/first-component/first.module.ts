import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstComponentComponent} from './first-component.component';
import {OnsenModule} from 'ngx-onsenui';
import {RestaurantCardComponent} from './restaurant-card/restaurant-card.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {RestaurantModule} from './restaurant/restaurant.module';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {SharedModule} from '../../shared/shared.module';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [FirstComponentComponent, RestaurantCardComponent, RestaurantListComponent, CartDetailComponent],
  imports: [
    CommonModule,
    OnsenModule,
    RestaurantModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [RestaurantListComponent, RestaurantComponent, CartDetailComponent]
})
export class FirstModule {
}
