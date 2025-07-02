import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { Customer } from './customer/customer';

export const routes: Routes = [
    {
        path: 'signin',
        component: SignIn
    }, 
    {
        path:'customer',
        component: Customer
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    }
];
