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
            this.totalPrice = 0;
            this.products.map((x: any) => this.totalPrice += x?.price * x?.count);
        })
    }

    ngOnInit(): void {
    }

    increaseCount(productId: any) {
        const product = this.products.find((x: any) => x._id === productId);
        this.cartService.increaseCount(product);
    }

    decreaseCount(productId: any) {
        const product = this.products.find((x: any) => x._id === productId);
        this.cartService.decreaseCount(product);
    }

    removeProduct(_id: any) {
        this.cartService.removeProduct(_id);
        this.totalPrice = 0;
        this.products.map((x: any) => this.totalPrice += x?.price);
    }

}
