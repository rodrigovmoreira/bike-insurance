import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageAction } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent | any;

  readonly pageActions: Array<PoPageAction> = [];
  label: string | any;
  value: string | undefined;
  help: string | any;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];

  constructor() { }

  ngOnInit() {
    this.showAngular();
   }


  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = `Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`;
    this.help = 'https://angular.io/';
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = `Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`;
    this.help = 'https://www.typescriptlang.org/';
  }

}

