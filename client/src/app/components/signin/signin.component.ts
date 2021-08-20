import { Component, OnInit } from '@angular/core';
import { SigninService } from '../../services/signin/signin.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    constructor(
        private service: SigninService,
        private afAuth: AngularFireAuth,
        private router: Router,
    ) { }

    ngOnInit(): void {
    }

    signin(event: Event, email: string, password: string) {
        event.preventDefault();
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then((data: any) => {
                this.service.signin({ uid: data.user.uid }, { 'Authorization': `Bearer ${data.user.Aa}` })
                    .subscribe((data: any) => localStorage.setItem('user', JSON.stringify(data)));
                this.router.navigate(['/']);
            })
            .catch(err => console.error(err));
    }
}
