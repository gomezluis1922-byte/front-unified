import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import {format} from 'date-fns-tz'

@Component({
  selector: 'app-cu-usuario',
  standalone: false,
  templateUrl: './cu-usuario.html',
  styleUrl: './cu-usuario.css',
})
export class CuUsuario {
  @Input() usuario: Usuario | undefined;

  formatDateTimeLocal(fecha:Date){
    let fechaFormateada = format(fecha,"yyyy-MM-dd'T'HH:mm",{timeZone:"America/Bogota"});
    return fechaFormateada;
  }

  updateDate(valor:string){
    this.usuario!.FechaRegistro=new Date(valor);
  }

}
