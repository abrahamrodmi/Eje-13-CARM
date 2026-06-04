//ALLEIN
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RegisterService } from '../../../services/register-service';
import{form, FORM_FIELD, FormField} from '@angular/forms/signals'
import { signal } from '@angular/core';
import { Registerinterface } from '../../../models/registerinterface';
import { required, minLength, maxLength, pattern } from '@angular/forms/signals';



@Component({
  selector: 'app-registro',
  imports: [RouterLink, FormField],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})

export class Registro{
  registerModel = signal<Registerinterface>({
    nombre: 'Nabor',
    username: 'Nabor@ejemplo.com',
    password: '123456'
  })
  //VALIDACIONES
  //Validaciones del nombre
  //requerido
  //no vacio, minimo 2 caracteres

  //Validaciones del password
  //requerido
  //no vacio, minimo 8 caracteres
  //no debe contener espacios en blanco, al menos una letra mayúscula, una letra minúscula y un número

  //Validaciones del username
  //requerido
  //no vacio, minimo 3 caracteres

  registerForm=form(this.registerModel,(schemaPath) => {
    //Validaciones del nombre
    required(schemaPath.nombre, {message: 'El nombre es requerido'});
    minLength(schemaPath.nombre, 2, {message: 'El nombre debe tener al menos 2 caracteres'});
    maxLength(schemaPath.nombre, 50, {message: 'El nombre no debe exceder los 50 caracteres'});
    //Validaciones del username
    required(schemaPath.username, {message: 'El nombre de usuario es requerido'});
    minLength(schemaPath.username, 3, {message: 'El nombre de usuario debe tener al menos 3 caracteres'});
    maxLength(schemaPath.username, 50, {message: 'El nombre de usuario no debe exceder los 50 caracteres'});
    //Validaciones del password
    required(schemaPath.password, {message: 'La contraseña es requerida'});
    minLength(schemaPath.password, 8, {message: 'La contraseña debe tener al menos 8 caracteres'});
    pattern(schemaPath.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]+$/, {message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número, y no debe contener espacios en blanco'});
    
  })
  
  constructor(private registerService: RegisterService) { }

  registro() {
    this.registerService.registrarse(this.registerModel()).subscribe({
      next: (respuesta) => {
        console.log(respuesta);
      },
      error: (error) => {
        console.error(error);
      }
     
    });
  }
}
