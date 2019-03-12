export class AbstractService {

  protected temp = 0;

  constructor() {
    this.temp++;

    this.log();
  }

  log(name?: string): void {
    console.log(`${name}: ${this.constructor.name} ${this.temp}`);
  }
}
