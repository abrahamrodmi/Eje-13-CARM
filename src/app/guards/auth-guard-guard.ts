import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  //By default return true, allos access to the routes 


  return true;
};
