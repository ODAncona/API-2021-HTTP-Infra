import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
    }
  }

  /**
   * Log a user in by requesting a jwt token to the API and storing it to localStorage
   */
  logUserIn(): void {
    this.authService.logUserIn(this.loginForm.value).subscribe(
      (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        } else {
          console.log(res.error);
        }
      },
      (err) => {
        console.log('error!!!!!', err);
      },
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
