import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private service: SignupService) { }

    ngOnInit(): void {
    }

    signup(event: Event,firstName: string, lastName: string, email: string, password: string) {
        event.preventDefault();

        const body: any = {
            firstName,
            lastName,
            email,
            password,
            profileImage: ''
        };
        
        this.service.signup(body).subscribe(data => console.log(data));
    }

}
