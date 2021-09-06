import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { SocialAuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private readonly homeService: HomeService,
    private readonly router: Router,
    private authService: SocialAuthService) { }

  ngOnInit(): void {

  }

  googleSignIn(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user)
      this.homeService.signInWithGoogle(user.idToken).subscribe((res) => {
        console.log(res)
        this.router.navigate(['detail'])
      }, err => console.log(err))
    })
  }

}
