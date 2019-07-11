import { Component, OnInit } from '@angular/core';
import { AuthUser } from '../models/authUser';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  User:AuthUser;
  loginError:boolean=false;
  constructor(private authService:AuthService,
              private router: Router) {
    this.User = new AuthUser('','');
  }

  ngOnInit() {
    this.authService.isLoggedIn = false;
  }

  onSubmit(){
    this.authService.login(this.User.email,this.User.mdp)
    .then(res=>{
      if(res){
        this.router.navigate(['accueil']);
      }else{
        this.loginError = true;
      }
    })
  }

}
