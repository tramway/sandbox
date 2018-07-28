import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { HooksLogger } from './hooks.logger';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
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
export class Root extends HooksLogger {

  constructor() {
    super();
  }
}

@Component({
  selector: 'child',
  template: `
    <div class="test-component">
      <div>{{constructor.name + nameSuffix}}</div>
      <ng-content></ng-content>
      <button (click)="handleClick()">RUN CD</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child extends HooksLogger {

  @Input()
  nameSuffix: any;

  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  handleClick(): void {
    this.cd.detectChanges();
  }
}
