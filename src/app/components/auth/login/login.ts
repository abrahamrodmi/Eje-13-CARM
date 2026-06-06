import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { form, required, minLength, maxLength } from '@angular/forms/signals';
import { signal } from '@angular/core';
import { LoginInterface } from '../../../models/login-interface';
import { LoginService } from '../../../services/login-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel = signal<LoginInterface>({
    username: '',
    password: '',
  })

  loginForm=form(this.loginModel,(schemaPath) => {
    //Validaciones del username
    required(schemaPath.username, {message: 'El nombre de usuario es requerido'});
    required(schemaPath.password, {message: 'La contraseña es requerida'});
    }
  )

  constructor(private loginService: LoginService,private router: Router) { }

  login() {
    this.loginService.login(this.loginModel()).subscribe({
      next: (response)=> {
        console.log(response.user.role);
        this.loginService.guardarToken(response.access_token, response.user.role);
         alert("Inicio de sesión exitoso" + response);
        this.router.navigate(['/layout']);
        this.loginService.sesionIniciada();
      },
      error: (error) => {

        alert("Error al iniciar sesión" + error);

        console.log(error);
      }
    });


}
}

