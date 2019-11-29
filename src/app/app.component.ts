import { CarDetailsComponent } from "./car-details.component";
import { Component } from "@angular/core";
@Component({
  selector: "simple-root",
  template: `
    <simple-car-details [model]="carModel" [year]="carYear">
    </simple-car-details>
    <button (click)="updateCar()">Aggiorna auto</button>
  `
})
export class AppComponent {
  carModel = "Ferrari 250 GTO";
  carYear = 1962;
  
  updateCar() {
    this.carModel = "Ferrari 288 GTO";
    this.carYear = 1984;
  }
}
