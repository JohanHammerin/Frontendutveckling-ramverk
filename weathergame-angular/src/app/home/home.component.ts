import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importera CommonModule
import { RouterLink, RouterOutlet } from '@angular/router';

Component({
  selector: 'app-home',
  standalone: true, // Om du använder standalone-komponenter
  imports: [CommonModule, RouterLink, RouterOutlet], // ✅ Lägg till CommonModule här
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
});

interface City {
  name: string;
  longitude: string;
  latitude: string;
}
export class HomeComponent {
  cities: City[] = [
    { name: 'Stockholm 🇸🇪', longitude: '18.06324', latitude: '59.334591' },
    { name: 'Oslo 🇳🇴', longitude: '10.757933', latitude: '59.911491' },
    { name: 'Barcelona 🇪🇸', longitude: '2.15899', latitude: '41.38879' },
  ];

  city: City = this.cities[0];
  temp: number | null = null;
  score = 0;
  guess = '';
  lastTemp: number | null = null;
  lastPoints: number | null = null;

  constructor() {
    this.newCity();
  }

  newCity(): void {
    let newIndex;
    let currentIndex = this.cities.findIndex((c) => c.name === this.city.name);

    do {
      newIndex = Math.floor(Math.random() * this.cities.length);
    } while (newIndex === currentIndex);

    this.city = this.cities[newIndex];
    this.getCurrentTemp();
  }

  async getCurrentTemp(): Promise<void> {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${this.city.latitude}&longitude=${this.city.longitude}&hourly=temperature_2m&forecast_days=1`
    );
    const data = await response.json();
    const hour = new Date().getHours();
    this.temp = data.hourly.temperature_2m[hour];
  }

  checkGuess(): void {
    if (this.temp === null || this.guess.trim() === '') return;

    const guessedTemp = parseFloat(this.guess);
    const difference = Math.abs(guessedTemp - this.temp);
    let points = 0;

    if (difference === 0) {
      points = 5;
    } else if (difference <= 2) {
      points = 3;
    } else if (difference <= 5) {
      points = 1;
    } else {
      points = -1;
    }

    this.score += points;
    this.lastPoints = points;
    this.lastTemp = this.temp;
    this.guess = '';
    this.newCity();
  }
}
