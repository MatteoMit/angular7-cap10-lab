import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: "simple-car-details",
  template: `
    <p>{{ model }} - {{ year }}</p>
    <pre>
<code>
{{ changes }}
</code>
</pre>
  `
})
export class CarDetailsComponent implements OnChanges {
  @Input() model;
  @Input() year;
  changes: string;
  ngOnChanges(changes: SimpleChanges): void {
    this.changes = JSON.stringify(changes, null, 2);
  }
}
