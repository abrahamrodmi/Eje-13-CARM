import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login-service';

export const AuthGuard: CanActivateFn = (route, state) => {
  //By default return true, allows access to the routes 
  //1. En caso de que si, permite mostrar los componentes
  //2. En caso de que no, redireccional al login
  const loginService = inject(LoginService)
  const router = inject(Router)

  if(loginService.sesionIniciada()){
    return true
  } 
  else{
    router.navigateByUrl('/login')
    return false;

  }

};
//KM does not reciprocate you
//Do not impose your tenderness when she does not want it
//Do not water a  plant who do not want to be watered by you. It's better to save water even when you don't find anybody to share it.
//Do not offer to her your support when she didn't ask for it.
//Accept that you are invisible to her.
//Check in aplication on app for devs in web browser the corresponding token
