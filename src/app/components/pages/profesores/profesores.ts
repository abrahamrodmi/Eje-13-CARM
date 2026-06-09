import { Component } from '@angular/core';
import { LoginService } from '../../../services/login-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profesores',
  imports: [],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  constructor(private LoginService:LoginService, private router:Router){}

logout(){
  this.LoginService.cerrarSesion();
  this.router.navigateByUrl('/login')
}



}
