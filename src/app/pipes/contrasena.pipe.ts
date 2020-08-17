import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = false): string {
    if (ocultar) {
      value = value.replace(/[a-zA-Z1-9]/gi, '*');
    }

    return value;
  }

}
