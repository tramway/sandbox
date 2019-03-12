import { Component } from '@angular/core';
import { CounterService } from 'src/app/dynamiccomponentsperformance/counter.service';

declare var window: Window;

@Component({
  selector: 'dynamic-component',
  template: `
    <div style="border: 1px solid mediumpurple; width: 300px; height: 100px;">
      <div>I'm dynamic component #{{componentNumber}} field 1</div>
      <div>I'm dynamic component #{{componentNumber}} field 2</div>
      <div>I'm dynamic component #{{componentNumber}} field 3</div>
      <div>I'm dynamic component #{{componentNumber}} field 4</div>
      <div>I'm dynamic component #{{componentNumber}} field 5</div>
    </div>
  `
})
export class DynamicComponent {

  componentNumber;

  constructor(private counterService: CounterService) {
    this.componentNumber = this.counterService.increment();
  }

}
