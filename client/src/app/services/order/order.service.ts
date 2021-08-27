import { Injectable } from '@angular/core';
import { addOrderInfo } from '../../actions/order.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin/signin.service';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl: string = `${environment.baseUrl}/${environment.order.base}`;
    placeOrderUrl: string = `${this.baseUrl}/${environment.order.placeOrder}`;
    order$: Observable<object>;
    data: any = {};

    constructor(
        private router: Router,
        private cartService: CartService,
        private auth: SigninService,
        private http: HttpClient,
        private store: Store<{ order: object }>
    ) {
        this.order$ = this.store.select(state => state.order);
        this.order$.subscribe((data: any) => this.data = data);
    }

    addOrderInfo(data: object) {
        this.store.dispatch(addOrderInfo(data));
    }

    placeOrder() {
        this.http.post(this.placeOrderUrl, this.data, {
            headers: {
                'Authorization': `Bearer ${this.auth.userInfo.Aa}`
            }
        }).subscribe(data => {
            localStorage.removeItem('cart');
            this.cartService.removeAllProducts();
            this.router.navigate(['order/success']);
        });
    }
}
