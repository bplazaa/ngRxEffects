import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private url = 'https://reqres.in/api';
  constructor(private servicio: HttpClient) { }

  getUsers(){
    return this.servicio.get(`${ this.url }/users?per_page=6&&delay=0.04`)
      .pipe(
        map(resp=>{
          return resp['data'];
        })
      );
  }

  getUserByid(id : string){
    return this.servicio.get(`${ this.url }/users/${ id }`)
      .pipe(
        map(resp=>{
          return resp['data'];
        })
      );
  }

}
