import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RouterRootComponent } from './router.root.component';
import { RouterParentComponent } from './router.parent.component';
import { RouterChildComponent } from './router.child.component';

const routes: Routes = [
  {
    path: '',
    component: RouterParentComponent
  },
  {
    path: 'child',
    outlet: 'parent'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    RouterRootComponent,
    RouterParentComponent,
    RouterChildComponent
  ],
  exports: [RouterRootComponent]
})
export class RouterTestModule {
}
