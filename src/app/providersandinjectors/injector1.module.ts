import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1 } from './component1';
import { Service1 } from './service1';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    Component1
  ],
  providers: [
    Service1
  ],
  exports: [
    Component1
  ]
})
export class Injector1Module {
}
