import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
    selector: 'app-dashboardaddproduct',
    templateUrl: './dashboardaddproduct.component.html',
    styleUrls: ['./dashboardaddproduct.component.scss']
})
export class DashboardaddproductComponent implements OnInit {

    brands: any = [];
    categories: any = [];
    constructor(
        private http: HttpClient
    ) { }

    ngOnInit(): void {
        this.http.get(`${environment.baseUrl}/brand/get-all`)
            .subscribe((brands: any) => {
                this.brands = brands
                console.log(this.brands);

            });
        this.http.get(`${environment.baseUrl}/category/get-all`)
            .subscribe((categories: any) => {
                this.categories = categories
                console.log(this.categories);

            });
    }

    onSubmitAddProduct(event: Event, title: string, image: string, price: string, category: string, brand: string, model: string, description: string, qtty: string) {
        event.preventDefault();

        const body = {
            title,
            image,
            price,
            category,
            brand,
            model,
            description,
            qtty,
        };

        this.http.post(`${environment.baseUrl}/product/create`, body).subscribe();
    }

}
