import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
@Component({
    selector: 'app-order-payment',
    templateUrl: './order-payment.component.html',
    styleUrls: ['./order-payment.component.scss']
})
export class OrderPaymentComponent implements OnInit {

    constructor(
        private cartService: CartService,
        private router: Router,
        private orderService: OrderService
    ) {
    }

    ngOnInit(): void {

    }

    handleSubmit(event: Event) {
        event.preventDefault();
        this.orderService.placeOrder().subscribe();
        localStorage.removeItem('cart');
        this.cartService.removeAllProducts();
        this.router.navigate(['order/success']);
    }

}
