import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { producto } from '../interface/Iproducto';

@Component({
  selector: 'app-dulce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dulce.component.html',
  styleUrl: './dulce.component.css'
})
export class DulceComponent {
  @Input()
  public Pie:producto = {
    name:'Pie de ',
    size:[16, 20],
    value:[1600, 2000],
    flavor: 'Piña',
    image: '/assets/dulces/PinaPie.jpg',
  };
}
