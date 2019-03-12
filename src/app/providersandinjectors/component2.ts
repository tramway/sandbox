import { Component } from '@angular/core';
import { Service2 } from './service2';

@Component({
  selector: `component2`,
  template: `
    <div>COMPONENT2</div>
  `,
  // providers: [Service2]
})
export class Component2 {

  constructor(private service2: Service2) {
  }
}
