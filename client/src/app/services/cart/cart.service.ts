import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addProduct, editProduct, removeProduct } from '../../actions/cart.actions';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart$: Observable<object>;

    constructor(private store: Store<{ cart: object }>) {
        this.cart$ = this.store.select(state => state.cart);
    }

    ngOnInit() {

    }

    private getStorage() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    addProduct(product: any) {
        this.store.dispatch(addProduct({ product }));
        localStorage.setItem('cart', JSON.stringify([...this.getStorage(), product]));
    }

    editProduct(product: any) {
        this.store.dispatch(editProduct({product}));
        localStorage
            .setItem('cart', JSON.stringify(this.getStorage().map((x: any) => x._id === product._id ? { ...x, ...product } : x)));
    }

    removeProduct(_id: string) {
        this.store.dispatch(removeProduct({ _id }));
        localStorage.setItem('cart', JSON.stringify(this.getStorage().filter((x: any) => x._id !== _id)));
    }
}
