import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Usuario } from '../../models/usuarios';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario';
import { UtilityService } from '../../services/utility';

@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.html',
  styleUrl: './listar-usuario.css',
})
export class ListarUsuario {
  @ViewChild('modalUsuario') modal: ElementRef | undefined;

  VectorUsuarios: Usuario[] = [];
  usuarioSelecciona: Usuario | undefined = undefined;
  isNew: boolean = false;


  isLoadig = true;

  constructor(private _usuarioService: UsuarioService, private _util: UtilityService) {
    this.LoadUsuarios();
  }

  LoadUsuarios() {
    this.isLoadig = true;
    this._usuarioService.getUsuarios()
      .subscribe((rs) => {
        this.VectorUsuarios = rs;
        this.isLoadig = false;
      });
  }

  EditarUsuario(usuario: Usuario) {
    this.isNew = false;
    this.usuarioSelecciona = usuario;
  }

  NuevoUsuario() {
    this.isNew = true;
    this.usuarioSelecciona = { IdEstudiante: 0, FechaRegistro: new Date(), NombreEstudiante: "", CCEstudiante: 0, IdCarrera: 1, IdCorreo: 1 }
  }

  GuardarUsuario() {
    if (this.isNew) {
      this.VectorUsuarios.push(this.usuarioSelecciona!) //llamar API Post
      this.usuarioSelecciona = undefined;
      this._util.CerrarModal(this.modal)
    } else {
      //llamada a la API put
      this.usuarioSelecciona = undefined;
      this._util.CerrarModal(this.modal);
    }
    Swal.fire({ title: 'Cambios guardados', icon: 'success' })
  }

  EliminarUsuario(us: Usuario) {
    Swal.fire(
      {
        icon: 'question',
        title: `Estás seguro de eliminar el usuario '${us.NombreEstudiante}'?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No',
        confirmButtonText: 'Si, eliminar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,

        customClass: {
          cancelButton: 'btn btn-secondary me-1',
          confirmButton: 'btn btn-danger'
        }
      }
    )
      .then(rs => {
        if (rs.isConfirmed) (

          //llamada API Delete
          Swal.fire({
            title: 'Usuario eliminado correctamente',
            icon: 'success'
          })
        )
      })
  }

}
