import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,

    ): boolean {
        let user: any = localStorage.getItem('user') || '';
        user = user ? JSON.parse(user) : false;

        if (user && user?.role === 'admin') {
            return true;
        }

        this.router.navigateByUrl('/home');
        return false;
    }

}
