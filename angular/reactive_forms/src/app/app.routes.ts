import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Customer } from './customer/customer';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: 'sign-in',
        component: SignIn
    },
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: 'customer',
        component: Customer
    },
    {
        path: 'customer/:id',
        component: Customer
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }, 
    {
        path: '**',
        component: PageNotFound
    },

];
