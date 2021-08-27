import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products/products.service';
@Component({
    selector: 'app-search-products-input',
    templateUrl: './search-products-input.component.html',
    styleUrls: ['./search-products-input.component.scss']
})
export class SearchProductsInputComponent implements OnInit {
    products: any = [];

    constructor(
        private router: Router,
        private productService: ProductsService
    ) { }

    ngOnInit(): void {
    }

    search(event: Event, searchValue: any) {
        event.preventDefault();

        const newProducts = this.productService.products
            .filter((x: any) =>
                x.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                x._id.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.category.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.brand.name.toLowerCase().includes(searchValue.toLowerCase())
            );

        this.productService.setProducts(newProducts);
        this.router.navigate(['/home']);
    }

}
