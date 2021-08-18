import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'aboutus',
        component: AboutusComponent
    },
    {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }