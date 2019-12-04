import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';


import * as fromUsuario from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../Services/usuario.service';
import * as usuarioActions from '../actions';

import { of } from 'rxjs'
// import { map } from 'rxjs/operators';


@Injectable()
export class UsuarioEffects{

    constructor(
        private action$: Actions,
        public usuarioService: UsuarioService
    ){}


    // @Effect( {dispatch : false})
    // cargarUsuarios$ = this.actions$.pipe(ofType(fromUsuarios.CARGAR_USUARIOS), 
    //                     map(action=> {
    //                         console.log(action);
    //                         return action;
    //                     })
    //                 );

    @Effect()
    cargarUsuario$ = this.action$.pipe(ofType(fromUsuario.CARGAR_USUARIO),
                    switchMap( (action)=> {
                        const id = action['id'];
                        
                        return this.usuarioService.getUserByid(id)
                            .pipe(
                                map( user => new usuarioActions.CargarUsuarioSuccessAction(user)),
                                catchError( error => of(new usuarioActions.CargarUsuarioFailAction(error)) )
                            );
                    } )
                    );
}

