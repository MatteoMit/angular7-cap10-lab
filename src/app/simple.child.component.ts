import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "simple-child-component",
  template: `
    <p>Messaggio ricevuto dal padre: {{ message }}</p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  constructor() {
    console.log(">> ChildComponent: constructor");
    console.log(
      ">> ChildComponent: valore messaggio" + "ricevuto nel costruttore ->",
      this.message
    );
  }
  ngOnInit() {
    console.log(">> ChildComponent: ngOnInit");
    console.log(
      ">> ChildComponent: valore messaggio" + "ricevuto in ngOnInit ->",
      this.message
    );
  }
}
