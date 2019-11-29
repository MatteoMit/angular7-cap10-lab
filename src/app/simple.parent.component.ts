import { ChildComponent } from "./simple.child.component";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-parent-component",
  template: `
    <simple-child-component [message]="greeting"></simple-child-component>
`
})
export class ParentComponent implements OnInit {
  greeting = "'HELLO'";
  constructor() {
    console.log("+ Parent component: constructor");
  }
  ngOnInit() {
    console.log("+ Parent component: ngOnInit");
  }
}
