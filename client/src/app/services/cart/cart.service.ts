import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cart: string = 'cart';

    constructor() { }

    getAll() {
        const cartJson: string = localStorage.getItem(this.cart) || '';
        return cartJson ? JSON.parse(cartJson) : {};
    }

    getOne(id: string) {
        const cartJson: string = localStorage.getItem(this.cart) || '';
        const cartObj: any = cartJson ? JSON.parse(cartJson) : {};
        const productId = Object.keys(cartObj).filter(key => key === id)[0];
        return cartObj[productId];
    }

    add(product: { _id: '' }) {
        const allProducts: any = this.getAll() || {};
        const data = { ...allProducts, [product?._id]: product };
        localStorage.setItem(this.cart, JSON.stringify(data));
    }

    update(product: any) {
        const allProducts: any = this.getAll();
        return { ...allProducts, [product?._id]: product };
    }

    removeOne(id: string) {
        let data = this.getAll();
        delete data[id];
        localStorage.setItem(this.cart, JSON.stringify(data));
    }
}
