import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profilepage',
    templateUrl: './profilepage.component.html',
    styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
    user: any = {};
    constructor() { }

    ngOnInit(): void {
        const user = localStorage.getItem('user');
        this.user = user ? JSON.parse(user) : {};
    }

}
