import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: any = [];

    constructor(
        private service: ProductsService
    ) { }

    ngOnInit(): void {
        this.service.getProducts().subscribe((data: any) => {
            this.products = data;
            console.log(this.products);
        });
    }

}
