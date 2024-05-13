import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DulceComponent } from '../dulce/dulce.component';
import { producto } from '../interface/Iproducto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,DulceComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  public Pie:producto[] = [
    {name: 'Pie de', size:[16, 20], value:[1600, 2000], flavor:'Piña', image: '/assets/dulces/PinaPie.jpg'},

    {name: 'Pie de', size:[16, 20], value:[1600, 2000], flavor:'Coco', image: '/assets/dulces/CocoPie.jpg'},

    {name: 'Pie de', size:[16, 20], value:[1600, 2000], flavor:'Guayaba', image: '/assets/dulces/GuayabaPie.jpg'},

    {name: 'Pie de', size:[16, 20], value:[1600, 2000], flavor:'Chocolate', image: '/assets/dulces/ChocoPie.jpg'},

    {name: 'Polvorón', value:[15], image: '/assets/dulces/polvoron.jpg'},

    {name: 'Pastel', value:[15], image: '/assets/dulces/pastel.jpg'},

    {name: 'Caña', value:[15], image: '/assets/dulces/cana.jpg'},

    {name: 'Galletas', value:[15], image: '/assets/dulces/cookie.jpg'},
  ]
}