import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
        
    ): boolean {
        let isLoggedIn: any = localStorage.getItem('user');
        isLoggedIn = JSON.parse(isLoggedIn);

        if(!isLoggedIn) {
            return true;
        }
        
        this.router.navigateByUrl('/home');
        return false;
    }

}
