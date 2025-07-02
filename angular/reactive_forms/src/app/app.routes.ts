import { Routes } from '@angular/router';
import { SignIn } from './sign-in/sign-in';
import { SignUp } from './sign-up/sign-up';
import { Customer } from './customer/customer';
import { PageNotFound } from './page-not-found/page-not-found';
import { CustomerDetail } from './customer-detail/customer-detail';
import { Houses } from './houses/houses';
import { AddCustomer } from './add-customer/add-customer';
import { AuthGuard } from './guards/auth-guard';

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
        path: 'customers',
        component: Customer,
        canActivate: [AuthGuard]
    },
    {
        path: 'customers/:id',
        component: CustomerDetail
    },
    {
        path: 'add-customer',
        component:AddCustomer
    },
    {
        path: 'housing',
        component:Houses
    },
    {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
    }, 
    {
        path: '**',
        component: PageNotFound
    },

];
