import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './application.root.component.html',
  styleUrls: ['./application.root.component.scss']
})
export class ApplicationRootComponent {
  title = 'app';

  constructor() {

  }

  lifecycle(): void {
  }

	test(): Window {
		if (window['asdasdfasdf']) {
			return null;
		}

		return window;
	}
}
