import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    productUrl: string = `${environment.baseUrl}/product`;
    getAllUrl: string = `${this.productUrl}/${environment.product.getAll}`;

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit() {

    }

    getProducts() {
        return this.http.get(this.getAllUrl);
    }
}
