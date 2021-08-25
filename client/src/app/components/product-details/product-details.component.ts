import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    productCounter: any = { units: 1 };
    product: any = {};
    handleCounter: Function = (event: any) => {
        const { id, dataset } = event.target;
        switch (id) {
            case 'incCounter':
                if (this.productCounter.units + 1 >= dataset.max) {
                    this.productCounter.units = dataset.max;
                    return;
                }
                this.productCounter.units += 1;
                break;
            case 'reduceCounter':
                if (this.productCounter.units - 1 <= 0) {
                    this.productCounter.units = 1;
                    return;
                }
                this.productCounter.units -= 1;
                break;
        }
    };

    constructor(
        private cart: CartService,
        private service: ProductsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['productId'];
        this.service.getOneProduct(id).subscribe((data: any) => {
            this.product = data;
        });
    }

    handleAddToCart(product: any) {
        // this.cart.add(product);
    }

}
