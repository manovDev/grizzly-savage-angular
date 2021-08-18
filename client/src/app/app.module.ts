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
        TitleSeparatorComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
