import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  private counter: number = 0;

  increment(): number {
    return this.counter++;
  }
}
