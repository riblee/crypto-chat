/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    //noinspection TypeScriptUnresolvedFunction
    (<any> $('.button-collapse')).sideNav({
      menuWidth: 150, // Default is 240
      edge: 'left',
      closeOnClick: true
    });
    console.log('Initial App State', this.appState.state);
  }

}
