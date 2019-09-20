import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnsenModule} from 'ngx-onsenui';
import {RestaurantComponent} from './restaurant.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {InfoComponent} from './info/info.component';
import {MenuModule} from './menu/menu.module';
import {CartComponent} from '../../../shared/cart/cart.component';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [RestaurantComponent, ReviewsComponent, InfoComponent],
  imports: [
    CommonModule,
    MenuModule,
    OnsenModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: []
})
export class RestaurantModule {
}
