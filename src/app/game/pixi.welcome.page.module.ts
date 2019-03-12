import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PixiWelcomePageComponent } from 'src/app/game/pixi.welcome.page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PixiWelcomePageComponent],
  exports: [PixiWelcomePageComponent],
  providers: []
})
export class PixiWelcomePageModule {
}
