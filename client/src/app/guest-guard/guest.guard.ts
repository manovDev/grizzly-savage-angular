import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GuestGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,

    ): boolean {
        let isLoggedIn: any = localStorage.getItem('user') || '';
        isLoggedIn = isLoggedIn ? JSON.parse(isLoggedIn) : false;

        if (isLoggedIn) {
            return true;
        }

        this.router.navigateByUrl('/home');
        return false;
    }

}
