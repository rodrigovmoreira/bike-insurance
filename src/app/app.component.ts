import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/home', icon: "ph ph-house", shortLabel: 'Home' },
    { label: 'Home', link: '/home', icon: "ph ph-house", shortLabel: 'Home' },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
