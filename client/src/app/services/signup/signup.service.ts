import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SignupService {
    signupUrl: string = `${environment.baseUrl}/user/signup`;

    constructor(private http: HttpClient) { }

    signup(body: object) {
        return this.http.post(this.signupUrl, body);
    }
}
