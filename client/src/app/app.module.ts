import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchProductsInputComponent } from './components/shared/search-products-input/search-products-input.component';
import { CartlinkComponent } from './components/shared/cartlink/cartlink.component';
import { ProfilenavComponent } from './components/shared/profilenav/profilenav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TitleSeparatorComponent } from './components/shared/title-separator/title-separator.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { FaqComponent } from './components/faq/faq.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cart } from './reducers/cart.reducer';
import { order } from './reducers/order.reducer';
import { OrderShippingComponent } from './components/order-shipping/order-shipping.component';
import { OrderPaymentComponent } from './components/order-payment/order-payment.component';
import { OrderConfirmComponent } from './components/order-confirm/order-confirm.component';
@NgModule({
    declarations: [
        AppComponent,
        AboutusComponent,
        MainLayoutComponent,
        HeaderComponent,
        SearchProductsInputComponent,
        CartlinkComponent,
        ProfilenavComponent,
        FooterComponent,
        HomeComponent,
        ContactusComponent,
        TitleSeparatorComponent,
        SigninComponent,
        SignupComponent,
        FaqComponent,
        ProductDetailsComponent,
        CartComponent,
        OrderShippingComponent,
        OrderPaymentComponent,
        OrderConfirmComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AppRoutingModule,
        NgbModule,
        StoreModule.forRoot({cart, order}, {})
    ],
    exports: [
        AppComponent,
        AboutusComponent,
        MainLayoutComponent,
        HeaderComponent,
        SearchProductsInputComponent,
        CartlinkComponent,
        ProfilenavComponent,
        FooterComponent,
        HomeComponent,
        ContactusComponent,
        TitleSeparatorComponent,
        SigninComponent,
        SignupComponent,
        FaqComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
