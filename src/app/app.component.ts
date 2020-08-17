import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre  = 'Capitan America';
  listaNumeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI: number = Math.PI;
  porcentaje = 0.234;
}
