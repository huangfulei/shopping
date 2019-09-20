import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantComponent} from './features/first-component/restaurant/restaurant.component';

const routes: Routes = [
  {path: 'restaurants', component: RestaurantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
