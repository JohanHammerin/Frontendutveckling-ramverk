import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  // ! = Ett värde kommer, vänta lite 😳
  @Input() buttonMessage!: string;
  @Output() clicked = new EventEmitter<void>();

  //Declare HandleClick Evenet -- ABSTRACT
  handledClick() {
    this.clicked.emit();
  }
}
