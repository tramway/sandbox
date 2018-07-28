import {
  Component,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  EventEmitter
} from '@angular/core';

export abstract class HooksLogger implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  className = this.constructor.name;

  constructor() {
    console.log(this.className + ' constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.className + ' onChanges');
  }

  ngOnInit() {
    console.log(this.className + ' onInit');
  }


  ngDoCheck() {
    console.log(this.className + ' doCheck');
  }

  ngAfterContentInit() {
    console.log(this.className + ' afterContentInit');
  }

  ngAfterContentChecked() {
    console.log(this.className + ' afterContentChecked');
  }

  ngAfterViewInit() {
    console.log(this.className + ' afterViewInit');
  }

  ngAfterViewChecked() {
    console.log(this.className + ' afterViewChecked');
  }

  ngOnDestroy() {
    console.log(this.className + ' onDestroy');
  }
}
