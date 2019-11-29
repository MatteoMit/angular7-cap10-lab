import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "simple-car-details",
  template: `
    <p>{{ car.model }} - {{ car.year }}</p>
    <pre>
<code>
{{ changes }}
</code>
</pre>
  `
})
export class CarDetailsComponent implements OnChanges {
  @Input() car;
  changes: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnchanges");
    this.changes = JSON.stringify(changes, null, 2);
  }
}
