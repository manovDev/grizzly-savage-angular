import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
@Component({
    selector: 'app-order-shipping',
    templateUrl: './order-shipping.component.html',
    styleUrls: ['./order-shipping.component.scss']
})
export class OrderShippingComponent implements OnInit {
    countries: any = [];
    constructor(
        private http: HttpClient,
        private router: Router,
        private orderService: OrderService
    ) { }

    ngOnInit(): void {
        this.http.get(
            'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
            {
                headers: {
                    'x-rapidapi-key': 'cfae0a60dcmsh9c04c24b2e05c4bp17dbd8jsna8830832a096',
                    'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
                }
            }
        ).subscribe((countries: any) => {
            this.countries = countries
        })
    }

    submitForm(event: Event, address: string, city: string, phoneNumber: string, postalCode: string, country: string) {
        event.preventDefault();
        if (address.length && city.length && phoneNumber.length && postalCode.length && country.length) {
            this.orderService.addOrderInfo({
                address,
                city,
                phoneNumber,
                postalCode,
                country
            });
            
            this.router.navigate(['order/confirm']);
        } else {
        }
    }

}
