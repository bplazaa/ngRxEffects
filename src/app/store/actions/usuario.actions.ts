import { Action } from '@ngrx/store';
import { Usuario } from '../../Models/usuarios.model';


export const CARGAR_USUARIO         = '[Usuario] Cargar Usuario';
export const CARGAR_USUARIO_FAIL    = '[Usuario] Cargar Usuario Fallo';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar Usuario Exitoso';

export class CargarUsuarioAction implements Action{
    readonly type = CARGAR_USUARIO;

    constructor(public id: string){

    }
}

export class CargarUsuarioFailAction implements Action{
    readonly type = CARGAR_USUARIO_FAIL;

    constructor( public payload: any){

    }

} 

export class CargarUsuarioSuccessAction implements Action{
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor( public usuario: Usuario){

    }

} 


export type usuarioAcciones =  CargarUsuarioAction        |
                                CargarUsuarioFailAction    |
                                CargarUsuarioSuccessAction;

