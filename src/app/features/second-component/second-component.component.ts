import {Component, OnInit} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui';

@Component({
  selector: 'ons-page',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() {
  }

  val = 'hello';

  ngOnInit() {
  }

  pop() {
    // this.navigator.element.popPage();
  }
}
