import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consejos'
})
export class ConsejosPipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (args != null) {
      if (args == 'perro') {
        switch (value) {
          case 1: return 'No lo dejes solo';
          case 2: return 'No dejar objetos peligrosos';
          case 3: return 'Ofrecer una buena alimentacion';
          case 4: return 'Lavalo y cepillalo continuamente';
          case 5: return 'Llevalo al veterinario continuamente';
        }
      }
      if (args == 'gato') {
        switch (value) {
          case 1: return 'Juega con el';
          case 2: return 'Ofrecer una buena alimentacion';
          case 3: return 'Vacunalo y desparasitalo';
          case 4: return 'Esterilización';
          case 5: return 'Habitos de higiene basica';
        }
      }
      if (args == 'hamster') {
        switch (value) {
          case 1: return 'No lo bañes nunca';
          case 2: return 'Limpia su jaula 1 vez a la semana';
          case 3: return 'Respeta sus horas de sueño (son nocturnos)';
          case 4: return 'Dedicale un rato de tu tiempo todos los dias';
          case 5: return 'Sacalo de su jaula y juega con el constantemente';
        }
      }
      if (args == 'ave') {
        switch (value) {
        case 1: return 'Limpia su jaula regularmente';
        case 2: return 'Renueva su alimento y agua todos los dias';
        case 3: return  'Manten su jaula a la luz solar';
        case 4: return 'Dedica tu tiempo para socializar con el todos los dias';
        case 5: return 'Desinfecta su jaula 1 vez a la semana';
      }
      }
      if (args == 'pez') {
        switch (value) {
          case 1: return'Procura mantener el agua de los peces limpia';
          case 2: return'Tenlo en un acuerio de tamaño adecuado';
          case 3: return'No sobre alimentes a tus peces';
          case 4: return'Mantenles una buena iluminacion';
          case 5: return'Asegura tener una bomba de aire y filtro';
        }
      }
    }
  }

}
