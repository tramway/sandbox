import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../../environments/environment';
import { IframeModule } from './iframe.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(IframeModule)
  .catch(err => console.log(err));
