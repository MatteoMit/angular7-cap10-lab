import { CarDetailsComponent } from "./car-details.component";
import { Component } from "@angular/core";

@Component({
  selector: "simple-root",
  template: `
    <simple-car-details [car]="car"> </simple-car-details>
    <button (click)="updateCar()">Aggiorna auto</button>
    <button (click)="updateCarYear()">Crea nuova auto</button>
  `
})
export class AppComponent {
  car = {
    model: "Ferrari 250 GTO",
    year: 1962
  };
  updateCar() {
    this.car.model = "Ferrari 288 GTO";
    this.car.year = 1984;
  }
  updateCarYear() {
    // aggiorna la proprietà 'year',
    // ma assegna un riferimento ad
    // un nuovo oggetto a 'this.car'
    // In alternativa è possibile usare Object.assign()
    this.car = { ...this.car, year: 1985 };
  }
}
