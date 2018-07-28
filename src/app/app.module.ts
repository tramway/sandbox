import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Child, Root } from './app.component';

@NgModule({
  declarations: [
    Root,
    Child
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Root]
})
export class AppModule {
}
