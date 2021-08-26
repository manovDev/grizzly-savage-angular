import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { SigninService } from '../../services/signin/signin.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    products: any = [];
    totalPrice: number = 0;
    productCounter: any = { units: 1 };
    loggedIn = false;
    handleCounter: Function = (event: Event) => {

    };

    constructor(
        private cartService: CartService,
        private auth: SigninService,
        private router: Router
    ) {
        this.cartService.cart$.subscribe((data: any) => {
            this.products = data;
            this.totalPrice = 0;
            this.products.map((x: any) => this.totalPrice += x?.price * x?.count);
        })
    }

    ngOnInit(): void {
        this.auth.isLoggedIn().then((isLoggedIn: boolean) => this.loggedIn = isLoggedIn);
    }

    redirectToLogin() {
        this.router.navigate(['sign-in']);
    }

    checkout() {
        this.router.navigate(['order/shipping']);
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
