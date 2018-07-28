import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationRootComponent } from './application.root.component';

@NgModule({
  declarations: [
    ApplicationRootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ApplicationRootComponent]
})
export class AppModule {
}
