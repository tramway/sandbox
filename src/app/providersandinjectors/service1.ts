import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';

declare var window: Window;

@Injectable()
export class Service1 extends AbstractService {

  constructor() {
    super();
  }
}
