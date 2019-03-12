import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentsPerformanceComponent } from 'src/app/dynamiccomponentsperformance/dynamic.components.performance.component';
import { DynamicComponent } from 'src/app/dynamiccomponentsperformance/dynamic.component';
import { CounterService } from 'src/app/dynamiccomponentsperformance/counter.service';

declare var window: Window;

@NgModule({
  imports: [CommonModule],
  declarations: [
    DynamicComponentsPerformanceComponent,
    DynamicComponent
  ],
  providers: [
    CounterService
  ],
  entryComponents: [
    DynamicComponent
  ],
  bootstrap: [DynamicComponentsPerformanceComponent]
})
export class DynamicComponentsModule {

  constructor() {
    window['performanceTestCounter'] = 0;
  }
}
