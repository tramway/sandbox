import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WelcomePageComponent } from './welcome.page.component';
import { RouterModule } from '@angular/router';
import { DynamicComponentsModule } from 'src/app/dynamiccomponentsperformance/DynamicComponentsModule';
import { DynamicComponentsPerformanceComponent } from 'src/app/dynamiccomponentsperformance/dynamic.components.performance.component';

@NgModule({
  imports: [
    CommonModule,

    DynamicComponentsModule,

    RouterModule.forRoot([
      {
        path: 'dynamic-components-creation',
        component: DynamicComponentsPerformanceComponent
      }
    ])

  ],
  declarations: [
    WelcomePageComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
    WelcomePageComponent
  ]
})
export class WelcomePageModule {
}
