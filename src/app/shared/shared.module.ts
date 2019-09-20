import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [CartComponent, MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDyJlTAtIFTolxb7iFfuBcmPgT2pwMywLA'
    })

  ],
  exports: [CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}
