import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
@Component({
    selector: 'app-cartlink',
    templateUrl: './cartlink.component.html',
    styleUrls: ['./cartlink.component.scss']
})
export class CartlinkComponent implements OnInit {

    productsCount = 0;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartService.cart$.subscribe((data: any) => this.productsCount = data.length);
    }

}
