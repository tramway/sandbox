import { NgModule } from '@angular/core';

import { LifeCycleHooksRootComponent } from './lifecycle.hooks.root.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LifeCycleHooksRootComponent
  ],
  providers: [],
  exports: [
    LifeCycleHooksRootComponent
  ]
})
export class LifecycleHooksModule {
}
