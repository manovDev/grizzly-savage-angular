import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup/signup.service';
import { validateField } from './validations';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    errors: any = {};

    constructor(
        private service: SignupService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    signup(event: Event, firstName: string, lastName: string, email: string, password: string) {
        event.preventDefault();

        const body: any = {
            firstName,
            lastName,
            email,
            password,
        };

        for (const name in body) {
            const isNotValid: any = validateField(name, body[name]);
            if (isNotValid) {
                this.errors[name] = isNotValid;
                console.log(isNotValid);
                
                return;
            } else {
                this.errors = {};
            }
        }

        this.service.signup(body).subscribe(data => {
            this.router.navigate(['/sign-in']);
        });
    }

}
