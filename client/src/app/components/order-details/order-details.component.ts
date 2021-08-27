import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-order-details',
    templateUrl: './order-details.component.html',
    styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
    order: any = {};
    user: any = {};

    constructor(
        private router: ActivatedRoute,
        private orderService: OrderService
    ) { }

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        this.user = user ? JSON.parse(user) : {};
        const { orderId } = this.router.snapshot.params;
        this.orderService.getOne(orderId).subscribe((orderData: any) => {
            this.order = orderData;
        });
    }

    multiply(a: number, b: number) {
        a = isNaN(a) ? 1 : +a;        
        b = isNaN(b) ? 1 : +b;        
        return a * b;
    }

}
