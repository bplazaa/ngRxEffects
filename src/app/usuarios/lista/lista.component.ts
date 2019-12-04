import { Component, OnInit } from '@angular/core';
//import { UsuarioService } from '../../Services/usuario.service';
import { Usuario } from '../../Models/usuarios.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as fromUsuarios from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []; 
  loading: boolean;
  error: any;
  //Sin ngrxEffects
  // constructor( public usuarioService: UsuarioService) { }
  constructor( private store: Store<AppState>) { }
 
  ngOnInit() {
    //Se hace del metodo sin ngrxEffects
    // this.usuarioService.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.usuarios = data;
    // })
    this.store.subscribe(state=> {
      this.usuarios = state.usuarios.users;
      this.loading = state.usuarios.loading;
      this.error = state.usuarios.error;
    });    
    const accion = new fromUsuarios.CargarUsuariosAction();
    this.store.dispatch(accion);


  }

}
