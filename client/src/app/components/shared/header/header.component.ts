import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    user: any = {};

    constructor() {
        let user: any = localStorage.getItem('user') || '';
        this.user=user? JSON.parse(user) : false;
    }

    ngOnInit(): void {
    }

}
