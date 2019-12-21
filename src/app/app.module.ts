import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OnsenModule} from 'ngx-onsenui';
import {FirstComponentComponent} from './features/first-component/first-component.component';
import {SecondComponentComponent} from './features/second-component/second-component.component';
import {ThirdComponentComponent} from './features/third-component/third-component.component';
import {FirstModule} from './features/first-component/first.module';
import {SecondModule} from './features/second-component/second.module';
import {ThirdModule} from './features/third-component/third.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    FirstModule,
    SecondModule,
    ThirdModule,
    HttpClientModule
  ],
  entryComponents: [
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule {
}
