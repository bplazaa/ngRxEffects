import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';


import * as fromUsuarios from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../Services/usuario.service';
import * as usuariosActions from '../actions';

import { of } from 'rxjs'
// import { map } from 'rxjs/operators';


@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ){}


    // @Effect( {dispatch : false})
    // cargarUsuarios$ = this.actions$.pipe(ofType(fromUsuarios.CARGAR_USUARIOS), 
    //                     map(action=> {
    //                         console.log(action);
    //                         return action;
    //                     })
    //                 );

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(ofType(fromUsuarios.CARGAR_USUARIOS),
                    switchMap( ()=> {
                        return this.usuariosService.getUsers()
                            .pipe(
                                map( users => new usuariosActions.CargarUsuariosSuccessAction(users)),
                                catchError( error => of(new usuariosActions.CargarUsuariosFailAction(error)) )
                            );
                    } )
                    );
}

