import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus';
import { ContactusComponent } from './components/contactus';
import { HomeComponent } from './components/home';
import { SignupComponent } from './components/signup';
import { SigninComponent } from './components/signin';

const routes: Routes = [
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: 'contactus',
        component: ContactusComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'sign-in',
        component: SigninComponent
    },
    {
        path: 'sign-up',
        component: SignupComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }