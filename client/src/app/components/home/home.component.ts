import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    products: any = [];

    constructor(
        private cart: CartService,
        private service: ProductsService
    ) { }

    ngOnInit(): void {
        this.service.getProducts().subscribe((data: any) => {
            this.products = data;
        });
    }

    handleAddToCart(product: any) {
        this.cart.addProduct(product);
    }

}
