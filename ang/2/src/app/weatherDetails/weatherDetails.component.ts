import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})
export class WeatherDetails implements OnInit {
  @Input() weatherData: data[] = [];
  cityName: string = ''; // store user input
  selectedCity: data | undefined; // store selected city data

  ngOnInit() {}

  // Function to search for the city and update selectedCity
  searchCity() {
    if (this.cityName.trim()) {
      this.selectedCity = this.weatherData.find(city =>
        city.name.toLowerCase() === this.cityName.trim().toLowerCase()
      );
    } else {
      this.selectedCity = undefined;
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
