import {Injectable} from '@angular/core';
import {DishService} from '../../core/dish.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  totalPrice: number;
  constructor(private dishService: DishService) {
  }

  updateTotalPrice(): Observable<any> {
    return this.dishService.dishSubject;
  }
}
