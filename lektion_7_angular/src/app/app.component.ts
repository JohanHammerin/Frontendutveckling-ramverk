import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lektion_7_angular';
  buttonList: number[] = [0, 5, 10];

  //Lifecycle function - Executes once per view (rendering)
  ngOnInit() {
    console.log('Hello World!');
  }
}
