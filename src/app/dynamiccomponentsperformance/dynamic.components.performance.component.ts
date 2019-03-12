import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Injector, ViewChild } from '@angular/core';
import { DynamicComponent } from 'src/app/dynamiccomponentsperformance/dynamic.component';

@Component({
  selector: 'dynamic-components-performance',
  template: `
    <div>Number of components to create
      <input #numberOfComponents type="number" value="1000">
      <button (click)="createComponents()">Create</button>
    </div>
    <div #placeForComponents style="border: 1px solid purple; display: flex;    border: 1px solid purple;    overflow-x: none;    flex-wrap: wrap;">
    </div>
  `,
  styles: [``]
})
export class DynamicComponentsPerformanceComponent {

  @ViewChild('placeForComponents') placeForComponents: ElementRef;
  @ViewChild('numberOfComponents') numberOfComponents;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {

  }

  createComponents() {
    const componentsNumber = Number(this.numberOfComponents.nativeElement.value);
    this.placeForComponents.nativeElement.innerHTML = '';
    let dynamicComponentFactory: ComponentFactory<DynamicComponent> = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    let dynamicComponent: ComponentRef<DynamicComponent> = dynamicComponentFactory.create(this.injector);

    console.time('Create components');
    for (let i = 0; i < componentsNumber; i++) {
      dynamicComponent.changeDetectorRef.detectChanges();

      this.placeForComponents.nativeElement.innerHTML += (dynamicComponent.location.nativeElement.outerHTML);
    }
    console.timeEnd('Create components');
  }
}
