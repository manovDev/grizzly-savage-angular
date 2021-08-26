import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addProduct, decreaseCount, editProduct, increaseCount, removeProduct } from '../../actions/cart.actions';

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
        let products = this.getStorage();
        const productIndex = products.findIndex((x: any) => x?._id && product?._id && x?._id === product?._id);

        if (productIndex !== -1) {
            this.increaseCount(product);
            return;
        }
        this.store.dispatch(addProduct({ product: { ...product, count: product.count || 1 } }));
        localStorage.setItem('cart', JSON.stringify([...products, product]));
    }

    increaseCount(product: any) {
        const calc = (newCount = 0) => product.qtty >= newCount ? newCount : product.qtty;

        const newProducts = this.getStorage()
            .map((x: any) => x._id === product._id ? { ...x, ...product, count: calc(x.count + 1) } : x);

        this.store.dispatch(increaseCount({ product }));
        localStorage.setItem('cart', JSON.stringify(newProducts));
    }

    decreaseCount(product: any) {
        const calc = (newCount = 0) => newCount > 1 ? newCount : 1;
        const newProducts = this.getStorage().map((x: any) => x._id === product._id ? { ...x, ...product, count: calc(x.count - 1) } : x);
        this.store.dispatch(decreaseCount({ product }));
        localStorage.setItem('cart', JSON.stringify(newProducts));
    }

    editProduct(product: any) {
        this.store.dispatch(editProduct({ product }));
        localStorage
            .setItem('cart', JSON.stringify(this.getStorage().map((x: any) => x._id === product._id ? { ...x, ...product } : x)));
    }

    removeProduct(_id: string) {
        this.store.dispatch(removeProduct({ _id }));
        localStorage.setItem('cart', JSON.stringify(this.getStorage().filter((x: any) => x._id !== _id)));
    }
}
