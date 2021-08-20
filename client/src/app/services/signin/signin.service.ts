import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
    providedIn: 'root'
})
export class SigninService {
    signInUrl: string = `${environment.baseUrl}/user/signin`;

    constructor(
        private afAuth: AngularFireAuth,
        private http: HttpClient,
    ) { }

    signin(body: object, headers: any) {
        return this.http.post(this.signInUrl, body, { headers });
    }

    signout() {
        return this.afAuth.signOut()
        .then(() => localStorage.removeItem('user'));
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            await new Promise((resolve, reject) =>
                this.afAuth.onAuthStateChanged(
                    user => {
                        if (user) {
                            resolve(user)
                        } else {
                            reject('no user logged in')
                        }
                    },
                    error => reject(error)
                )
            )
            return true
        } catch (error) {
            return false
        }
    }
}
