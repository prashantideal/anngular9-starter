import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  username: string;
  password: string;
  loginError: boolean;
  loginReq: FormData;

  constructor(private authService: AuthService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
  }

  signIn(){
    this.loginReq = new FormData();
    this.loginReq.append('username', this.username);
    this.loginReq.append('password', this.password);
    this.authService.login(this.loginReq)
    .subscribe( (response) => {
      // this.authService.setSession(response);
      this.goToHome();
      },
        (error) => {
          console.log(error);
          this.showLoginError();
        }
      );

  }

showLoginError(){
  this.loginError = true;
}

goToHome(){
  this.location.replaceState('/');
  this.location.go('/operations/checkins');
  this.router.navigate(['/operations/checkins']);
}

}
