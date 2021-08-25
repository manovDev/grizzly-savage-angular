import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus';
import { ContactusComponent } from './components/contactus';
import { HomeComponent } from './components/home';
import { SignupComponent } from './components/signup';
import { SigninComponent } from './components/signin';
import { FaqComponent } from './components/faq';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guard/guard.guard';

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
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'product/:productId',
        component: ProductDetailsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'sign-in',
        component: SigninComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'sign-up',
        component: SignupComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'faq',
        component: FaqComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }