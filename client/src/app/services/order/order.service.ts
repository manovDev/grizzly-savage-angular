import { Injectable } from '@angular/core';
import { addOrderInfo } from '../../actions/order.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SigninService } from '../signin/signin.service';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    baseUrl: string = `${environment.baseUrl}/${environment.order.base}`;
    placeOrderUrl: string = `${this.baseUrl}/${environment.order.placeOrder}`;
    getAllUrl: string = `${this.baseUrl}/${environment.order.getAll}`;
    getOneUrl: Function = (id: string) => `${this.baseUrl}/${environment.order.getOne(id)}`;
    order$: Observable<object>;
    data: any = {};
    constructor(
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
        return this.http.post(this.placeOrderUrl, this.data, {
            headers: {
                'Authorization': `Bearer ${this.auth.userInfo.Aa}`
            }
        });
    }

    getAll() {
        return this.http.get(this.getAllUrl, {
            headers: {
                'Authorization': `Bearer ${this.auth.userInfo.Aa}`
            }
        });
    }

    getOne(orderId: string) {
        return this.http.get(this.getOneUrl(orderId), {
            headers: {
                'Authorization': `Bearer ${this.auth.userInfo.Aa}`
            }
        });
    }
}
