// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService:AuthService,
              private router: Router){
    
  }  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let url: string = state.url;

    if(this.authService.isLogged()){
      return true;
    }else{
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;
      // Navigate to the login page with extras
      this.router.navigate(['login']);
      return false; 
    }
    

  }
}