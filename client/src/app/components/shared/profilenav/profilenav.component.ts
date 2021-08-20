import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../../services/signin/signin.service';
@Component({
    selector: 'app-profilenav',
    templateUrl: './profilenav.component.html',
    styleUrls: ['./profilenav.component.scss']
})
export class ProfilenavComponent implements OnInit {
    isUserLoggedIn: boolean = false;

    constructor(private service: SigninService) { }

    ngOnInit(): void {
        this.isLoggedIn();
    }

    signOut() {
        this.service.signout();
    }

    isLoggedIn () {
        this.service.isLoggedIn()
        .then((isLoggedIn: boolean) => {
            console.log(isLoggedIn);
            
            this.isUserLoggedIn = isLoggedIn;
        });
    }

}
