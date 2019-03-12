import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'router-parent',
  template: `
    <h1>ROUTER PARENT</h1>
    <router-outlet name="parent"></router-outlet>
  `,
  styles: [
    ``
  ]
})
export class RouterParentComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
