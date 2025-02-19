import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet></router-outlet>`, // ✅ Router-outlet finns här!
  imports: [RouterOutlet], // ✅ Lägg till RouterOutlet här
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
