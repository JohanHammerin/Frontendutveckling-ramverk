import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  longitude: string;
  latitude: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  cities: City[] = [
    { name: 'Stockholm 🇸🇪', longitude: '18.06324', latitude: '59.334591' },
    { name: 'Oslo 🇳🇴', longitude: '10.757933', latitude: '59.911491' },
    { name: 'Barcelona 🇪🇸', longitude: '2.15899', latitude: '41.38879' },
    { name: 'Berlin 🇩🇪', longitude: '13.404954', latitude: '52.520008' },
    { name: 'Paris 🇫🇷', longitude: '2.349014', latitude: '48.864716' },
    { name: 'Helsinki 🇫🇮', longitude: '24.938379', latitude: '60.169857' },
    { name: 'Reykjavik 🇮🇸', longitude: '-21.817438', latitude: '64.126518' },
    { name: 'Rome 🇮🇹', longitude: '12.496365', latitude: '41.902782' },
    { name: 'London 🏴󠁧󠁢󠁥󠁮󠁧󠁿', longitude: '-0.127758', latitude: '51.507351' },
    { name: 'Riga 🇱🇻', longitude: '24.1060604', latitude: '56.9475636' },
    { name: 'Copenhagen 🇩🇰', longitude: '12.6159319', latitude: '55.662352' },
    { name: 'Prague 🇨🇿', longitude: '14.4191593', latitude: '50.0824379' },
    { name: 'Tallinn 🇪🇪', longitude: '24.7439894', latitude: '59.4328402' },
    { name: 'Budapest 🇭🇺', longitude: '19.054237', latitude: '47.4952113' },
    { name: 'Dublin 🇮🇪', longitude: '-6.2673368', latitude: '53.3441204' },
    { name: 'Vilnius 🇱🇹', longitude: '25.289479', latitude: '54.684752' },
    { name: 'Amsterdam 🇳🇱', longitude: '4.89784', latitude: '52.36532' },
    { name: 'Lisbon 🇵🇹', longitude: '-9.1388862', latitude: '38.7078405' },
    { name: 'Bern 🇨🇭', longitude: '7.4523938', latitude: '46.9485497' },
    { name: 'Madrid 🇪🇸', longitude: '-3.692517', latitude: '40.4192127' },
    { name: 'Tirana 🇦🇱', longitude: '19.8168711', latitude: '41.3256062' },
  ];

  city: City = this.cities[0];
  temp: number = 0;
  score = 0;
  guess = '';
  lastTemp: number | null = null;
  lastPoints: number | null = null;

  ngOnInit(): void {
    this.newCity();
  }

  newCity(): void {
    let newIndex;
    let currentIndex = this.cities.findIndex((c) => c.name === this.city.name);

    do {
      newIndex = Math.floor(Math.random() * this.cities.length);
    } while (newIndex === currentIndex);

    this.city = this.cities[newIndex];
  }
}
