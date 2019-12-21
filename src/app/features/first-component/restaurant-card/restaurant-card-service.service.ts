import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantCardServiceService {

  baseURL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get(this.baseURL + 'restaurants/');
  }

}
