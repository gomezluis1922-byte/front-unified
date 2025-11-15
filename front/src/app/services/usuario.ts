import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiBase='';

  constructor(private _http:HttpClient){
    this.apiBase = environment.urlApibase + 'estudiante';
  }

  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this.apiBase + '/');
  }
  
}
