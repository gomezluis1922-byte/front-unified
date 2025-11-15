import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuario } from './listar-usuario/listar-usuario';
import { RouterModule, Routes } from '@angular/router';
import { CuUsuario } from './cu-usuario/cu-usuario';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes=[
  {
    path:'',
    component: ListarUsuario
  }
]


@NgModule({
  declarations: [
    ListarUsuario,
    CuUsuario
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class UsuarioModule { }
