import { ChildComponent } from "./simple.child.component";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "simple-parent-component",
  template: `
<simple-child-component [message]="greeting"></simple-childcomponent>
`
})
export class ParentComponent implements OnInit {
  greeting = "hello";
  constructor() {
    console.log("+ Parent component: constructor");
  }
  ngOnInit() {
    console.log("+ Parent component: ngOnInit");
  }
}
