import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'router-root',
  template: `
    <h1>ROUTER ROOT</h1>
    <router-outlet></router-outlet>
   `,
  styles: [
    ``
  ]
})
export class RouterRootComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
