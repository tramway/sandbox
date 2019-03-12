import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component2 } from './component2';
import { Service2 } from './service2';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Component2
  ],
  providers: [
    Service2
  ],
  exports: [
    Component2
  ]
})
export class Injector2Module {
}
