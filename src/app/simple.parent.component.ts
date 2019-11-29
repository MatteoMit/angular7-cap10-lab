import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './simple.child.component';

@Component({
  selector: "simple-parent-component",
  template: `
    <div>
      <simple-child-component *ngIf="!hidden" [message]="greeting">
      </simple-child-component>
    </div>  
    <button (click)="hidden = !hidden">
      {{ hidden ? "Mostra" : "Nascondi" }} ChildComponent
    </button>
  `
})
export class ParentComponent implements OnInit {
  greeting = "hello";
  hidden = false;
  constructor() {
    console.log("+ Parent component: constructor");
  }
  ngOnInit() {
    console.log("+ Parent component: ngOnInit");
  }
}
