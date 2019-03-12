import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ApplicationRootComponent } from './application.root.component';
import { WelcomePageModule } from './welcomepage/welcome.page.module';

@NgModule({
  imports: [
    BrowserModule,
    WelcomePageModule
  ],
  declarations: [
    ApplicationRootComponent
  ],
  providers: [],
  bootstrap: [ApplicationRootComponent]
})
export class AppModule {
}
