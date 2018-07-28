import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IframeChild } from './iframe.child';
import { RouterModule, Routes } from '@angular/router';
import { FirstRouteComponent } from './first.route.component';
import { APP_BASE_HREF } from '@angular/common';
import { IframeTestRootComponent } from './iframe.test.root.component';

const routes: Routes = [
  {
    path: 'child',
    component: IframeChild
  }, {
    path: 'first',
    component: FirstRouteComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    IframeTestRootComponent,
    IframeChild,
    FirstRouteComponent,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/iframe.html' }

  ],
  bootstrap: [IframeTestRootComponent]
})
export class IframeModule {
}
