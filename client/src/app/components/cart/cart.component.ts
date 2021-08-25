import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    products: any = [];
    totalPrice: number = 0;
    productCounter: any = { units: 1 };
    handleCounter: Function = (event: Event) => {

    };

    constructor(
        private cartService: CartService
    ) {
        this.cartService.cart$.subscribe((data: any) => {
            this.products = data;
            this.products.map((x: any) => this.totalPrice += x?.price);
        })
    }

    ngOnInit(): void {
    }

    addProduct() {
        this.cartService.addProduct({ _id: 'asd' });
    }

    removeProduct(_id: any) {
        this.cartService.removeProduct(_id);
        this.totalPrice = 0;
        this.products.map((x: any) => this.totalPrice += x?.price);
    }

}
