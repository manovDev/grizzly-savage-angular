import { setProducts } from '../../actions/products.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    productUrl: string = `${environment.baseUrl}/product`;
    getAllUrl: string = `${this.productUrl}/${environment.product.getAll}`;
    getOneUrl: Function = (productId: any) => `${environment.baseUrl}/product/${productId}`;
    products$: Observable<object>;
    products: any = [];

    constructor(
        private http: HttpClient,
        private store: Store<{ products: any }>
    ) {
        this.products$ = this.store.select(state => state.products);
        this.http.get(this.getAllUrl).subscribe((products: any) => {
            this.products = products;
            this.store.dispatch(setProducts({ products }));
        })
    }

    ngOnInit() {

    }

    getProducts() {
        this.http.get(this.getAllUrl).subscribe((products: any) => {
            this.products = products;
            this.store.dispatch(setProducts({ products }));
        })
        return this.products$;
    }

    setProducts(products: Array<object>) {
        this.store.dispatch(setProducts({ products }));
    }

    getOneProduct(productId: string) {
        return this.http.get(this.getOneUrl(productId));
    }
}
