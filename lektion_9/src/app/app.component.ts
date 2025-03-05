import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './types/Products';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_9';

  //Prepare API
  productData: Product[] = []; //Why any? What do we do to change this...
  //TODO - private scope
  constructor(private httpClient: HttpClient) {}

  //on creation of component
  //ngOnInit = always executes ONCE
  //Gör om det till json
  ngOnInit() {
    console.log('Hello world');
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products') //Ttpesfett acioehcved??
      .subscribe((response: Product[]) => {
        this.productData = response;
      });
  }
}
