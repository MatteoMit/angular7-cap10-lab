import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "simple-child-component",
  template: `
    <p>Messaggio ricevuto dal componente Padre: {{ message }}</p>
    <p> ---------------------------------------------------</p>
    <p>Per verifaree l'esecuzione, usare la console</p>
    <p>di FireFox [CTRL + SHIFT + K]</p>
    <p>o Chrome [CTRL + SHIFT + J ]</p>
    <p>al seguente link:</p>
    <a title="StackBlitz Angular7 - CAP 10"
      href="https://angular7-cap10-lab.stackblitz.io" >
      "StackBlitz Angular7 - CAP 10
    </a>
      <p> ---------------------------------------------------</p>
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
