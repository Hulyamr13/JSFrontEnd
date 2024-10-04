import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss']
})
export class TemperatureConverter implements OnInit {

  celsius: number | null = null;
  fahrenheit: number | null = null;

  ngOnInit() {
  }

  // Method to convert Celsius to Fahrenheit
  convertCelsiusToFahrenheit(): void {
    if (this.celsius !== null) {
      this.fahrenheit = parseFloat((this.celsius * 9 / 5 + 32).toFixed(1));
    } else {
      this.fahrenheit = null; // Clear Fahrenheit if Celsius is null
    }
  }

  // Method to convert Fahrenheit to Celsius
  convertFahrenheitToCelsius(): void {
    if (this.fahrenheit !== null) {
      this.celsius = parseFloat(((this.fahrenheit - 32) * 5 / 9).toFixed(1));
    } else {
      this.celsius = null; // Clear Celsius if Fahrenheit is null
    }
  }
}
