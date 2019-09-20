import { Component } from '@angular/core';
import {FirstComponentComponent} from './features/first-component/first-component.component';
import {SecondComponentComponent} from './features/second-component/second-component.component';
import {ThirdComponentComponent} from './features/third-component/third-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  initialPage = FirstComponentComponent;
  tab1 = FirstComponentComponent;
  tab2 = SecondComponentComponent;
  tab3 = ThirdComponentComponent;
}
