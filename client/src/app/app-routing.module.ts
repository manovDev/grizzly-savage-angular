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
import { OrderShippingComponent } from './components/order-shipping/order-shipping.component';
import { OrderPaymentComponent } from './components/order-payment/order-payment.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
import { OrdersuccsessComponent } from './components/ordersuccsess/ordersuccsess.component';
import { UserordersComponent } from './components/userorders/userorders.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { DashboardaddproductComponent } from './components/dashboardaddproduct/dashboardaddproduct.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
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
        path: 'dashboard/products',
        component: DashboardaddproductComponent,
    },
    {
        path: 'my-profile',
        component: ProfilepageComponent,
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
        path: 'order/confirm',
        component: OrderConfirmComponent
    },
    {
        path: 'order/shipping',
        component: OrderShippingComponent
    },
    {
        path: 'order/payment',
        component: OrderPaymentComponent
    },
    {
        path: 'order/success',
        component: OrdersuccsessComponent
    },
    {
        path: 'order/details/:orderId',
        component: OrderDetailsComponent
    },
    {
        path: 'my-orders',
        component: UserordersComponent
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