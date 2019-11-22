import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Services/usuario.service';
import { Usuario } from '../../Models/usuarios.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []; 

  constructor( public usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsers().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    })

  }

}
