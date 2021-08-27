import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
    selector: 'app-order-confirm',
    templateUrl: './order-confirm.component.html',
    styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
    phone : string = '';
    address : string = '';
    constructor(
        private router: Router,
        private orderService: OrderService,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        this.orderService.order$.subscribe((data: any) => {
            this.phone = data.phoneNumber;
            this.address = `${data.address}, ${data.city}, ${data.postalCode}, ${data.country}`;
        })
    }

    get fullName() {
        let user: any = localStorage.getItem('user');
        user = user ? JSON.parse(user) : {};
        return `${user.firstName} ${user.lastName}`;
    }

    get products() {
        let products: any = localStorage.getItem('cart');
        products = products.length ? JSON.parse(products) : [];
        return products;
    }


    subtotalPrice() {
        const totalSum = this.products
            .reduce((a: number, b: any) => a + b.price * b.count, 0);

        return totalSum;
    }

    get tax() {
        return this.subtotalPrice() * 0.05;
    }

    totalPrice() {
        return this.tax + this.subtotalPrice();
    }

    calcTotal(a: number, b: number) {
        return (a * b).toFixed(2);
    }

    handleProceedToPayment() {
        const [firstName, lastName] = this.fullName;
        const products = this.cartService.getStorage();
        const qtty = products.length;

        this.orderService.addOrderInfo({
            tax: this.tax,
            shippingCost: 0,
            totalPrice: this.totalPrice(),
            firstName,
            lastName,
            products,
            qtty
        });

        this.router.navigate(['order/payment']);
    }

            

}
