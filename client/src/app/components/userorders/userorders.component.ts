import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
@Component({
    selector: 'app-userorders',
    templateUrl: './userorders.component.html',
    styleUrls: ['./userorders.component.scss']
})
export class UserordersComponent implements OnInit {
    myOrders: any = [];
    constructor(
        private orderService: OrderService
    ) { }

    ngOnInit(): void {
        this.orderService.getAll().subscribe((orders: any) => {
            this.myOrders = orders;
            console.log(orders);
            
        });
    }

    calc(a:number,b:number) {
        return a + b;
    }

}
