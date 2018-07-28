import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'iframe-test-root',
  template: `
    <div>IframeTestRootComponent</div>
    <button (click)="firstRoute()">first route component</button>
    <button (click)="iframeChild()">child component</button>

    <router-outlet></router-outlet>

  `
})
export class IframeTestRootComponent {

  constructor(private router: Router) {
  }

  firstRoute() {
    this.router.navigateByUrl('first');
  }

  iframeChild() {
    this.router.navigateByUrl('child');
  }
}
