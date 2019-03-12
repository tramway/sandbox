import { Component } from '@angular/core';
import { Service1 } from './service1';

@Component({
  selector: `component1`,
  template: `<div>COMPONENT1</div>`,
  providers: [
    // Service1
  ]
})
export class Component1 {

  constructor(private service1: Service1) {}
}
