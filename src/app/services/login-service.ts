import { Injectable } from '@angular/core';
import { Registerinterface } from '../models/registerinterface';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';
import { LoginInterface } from '../models/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlBase='https://examen-ii-aipg-1.onrender.com/'
  

  constructor(private httpClient:HttpClient){
  }
  login(usuario: LoginInterface): Observable<any> {
    return this.httpClient.post(this.urlBase+'auth/login', usuario);
  }

  guardarToken(token:string, role:string){
    localStorage.setItem('token', token)
    localStorage.setItem('role', role);
  
  }

  cerrarSesion(){
    localStorage.removeItem('token');


  }

  recuperarToken(){
    return localStorage.getItem('token');
  }

  sesionIniciada():boolean{
    if(this.recuperarToken() == null){
      return false;
    }else{
    return true
  }
}
}

