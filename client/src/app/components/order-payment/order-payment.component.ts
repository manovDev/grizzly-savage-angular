import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
@Component({
    selector: 'app-order-payment',
    templateUrl: './order-payment.component.html',
    styleUrls: ['./order-payment.component.scss']
})
export class OrderPaymentComponent implements OnInit {

    constructor(
        private orderService: OrderService
    ) {
    }

    ngOnInit(): void {

    }

    handleSubmit(event: Event) {
        event.preventDefault();
        
        this.orderService.placeOrder();
    }

}
