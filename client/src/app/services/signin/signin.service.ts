import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SigninService {
    signInUrl: string = `${environment.baseUrl}/user/signin`;

    constructor(
        private http: HttpClient,
    ) { }

    signin(body: object, headers: any) {
        return this.http.post(this.signInUrl, body, { headers });
    }
}
