import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {
    constructor(private LoginService:LoginService, private router:Router){}

logout(){
  this.LoginService.cerrarSesion();
  this.router.navigateByUrl('/login')
}



}
