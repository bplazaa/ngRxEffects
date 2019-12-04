import { Action } from '@ngrx/store';
import { Usuario } from '../../Models/usuarios.model';


export const CARGAR_USUARIOS         = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL    = '[Usuarios] Cargar Usuarios Fallo';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios Exitoso';

export class CargarUsuariosAction implements Action{
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFailAction implements Action{
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor( public payload: any){

    }

} 

export class CargarUsuariosSuccessAction implements Action{
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor( public usuarios: Usuario[]){

    }

} 


export type usuariosAcciones =  CargarUsuariosAction        |
                                CargarUsuariosFailAction    |
                                CargarUsuariosSuccessAction;

