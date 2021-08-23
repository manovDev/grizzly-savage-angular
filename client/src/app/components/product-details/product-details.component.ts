import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    product: any = {};

    constructor(
        private service: ProductsService,
        private route: ActivatedRoute
        ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params['productId'];
        this.service.getOneProduct(id).subscribe((data: any) => {
            this.product = data;
            console.log(data);
            
        });
    }

}
