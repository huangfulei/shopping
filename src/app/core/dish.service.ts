import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  dishSubject = new BehaviorSubject(any);

  // dishObservable = this.dishSubject.asObservable();

  constructor() {
  }

  addToCart(item: any) {
    this.dishSubject.next(item);
  }
}
