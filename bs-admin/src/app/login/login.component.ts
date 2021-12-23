import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/admin']);
      }
    }
  }

  logUserIn(): void {
    this.authService.logUserIn(this.loginForm.value)
      .subscribe(
        res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
          } else {
            console.log(res.error);
          }
        },
        err => {
          console.log('error!!!!!', err);
        },
        () => { this.router.navigate(['/admin']) }
      )
  }

}
