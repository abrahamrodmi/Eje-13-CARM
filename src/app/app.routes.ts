import { Routes } from '@angular/router';
import { Login } from './components/auth/login/login';
import { Registro } from './components/auth/registro/registro';
import { Forgot } from './components/auth/forgot/forgot';
import { Notfound } from './components/pages/notfound/notfound';
import { Layout } from './components/layout/layout';
import { Dash } from './components/pages/dash/dash';
import { Kardex } from './components/pages/kardex/kardex';
import { Materias } from './components/pages/materias/materias';
import { Profesores } from './components/pages/profesores/profesores';

export const routes: Routes = [
    {
        path: 'layout',
        component: Layout,
        children: [
            {
                path: ' ',
                redirectTo: '/layout/dash',
                pathMatch: 'full'
            },

            {
                path: 'dash',
                component: Dash
            },

            {
                path: 'kardex',
                component: Kardex
            },

            {
                path: 'materias',
                component: Materias
            },
            
            {
                path: 'profesores',
                component: Profesores
            }
        ]
    },
    {
        //http://app.vercel/login
        path: 'login',
        component: Login/*LoginComponent*/

    },
    {
        //http://localhost:4200/registro
        path: 'registro',
        component: Registro/*RegistroComponent*/
    },
    {
        path: 'recuperar',
        component: Forgot/*ForgotComponent*/
    },

    {
        path: '**',
        component: Notfound/*NotfoundComponent*/
    }
];
