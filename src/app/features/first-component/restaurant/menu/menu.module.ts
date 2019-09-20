import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {DishCategoriesComponent} from './dish-categories/dish-categories.component';
import {OnsenModule} from 'ngx-onsenui';
import {CartComponent} from '../../../../shared/cart/cart.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  declarations: [MenuComponent, DishCategoriesComponent],
  imports: [
    CommonModule,
    OnsenModule,
    SharedModule
  ],
  exports: [MenuComponent],
  entryComponents: [DishCategoriesComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class MenuModule {
}
