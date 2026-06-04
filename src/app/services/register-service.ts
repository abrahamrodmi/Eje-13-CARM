import { Injectable } from '@angular/core';
import { Registerinterface } from '../models/registerinterface';
import { HttpClient } from '@angular/common/http';
import { Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  urlBase='https://examen-ii-aipg.onrender.com/'

  constructor(private httpClient:HttpClient){

  }
  registrarse(usuario:Registerinterface):Observable<any>{
    //Metodo para registrarse
    return this.httpClient.post(this.urlBase+'/auth/register',usuario,{timeout:10000})
  }
  findAll(){

  }
}
