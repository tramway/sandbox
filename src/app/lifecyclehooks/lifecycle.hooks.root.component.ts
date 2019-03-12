import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { HooksLogger } from './hooks.logger';

@Component({
  selector: 'lifecycle-hooks-root',
  templateUrl: `./root.component.html`,
  styles: [
      `/deep/ .test-component {
      display: flex;
      border: 1px solid black;
      width: fit-content;
      height: fit-content;
      margin: 10px;
      padding: 10px;
    }`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LifeCycleHooksRootComponent extends HooksLogger {

  constructor() {
    super();
  }
}
