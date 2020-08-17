import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre  = 'Capitan America';
  nombre2 = 'JuaN PeREz';
  listaNumeros  = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI: number    = Math.PI;
  porcentaje    = 0.234;
  salario       = 123.4;
  fecha: Date   = new Date();
  idioma = 'es';
  valorPromesa  = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Habemus Data');
    }, 3600);

  });

  heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
          calle: 'Proyectada 5',
          casa: 295
      }

  };

}
