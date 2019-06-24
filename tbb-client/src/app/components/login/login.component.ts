import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private notificator: NotificationService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(formValue: any) {
    const { username, password } = formValue;

    this.authService.login({
      username,
      password,
    }).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.notificator.success('Successful login!');
        this.authService.updateUserRole();
        this.router.navigate(['/']);

        return true;
      },
      (err: HttpErrorResponse) => {
        this.notificator.error('Wrong credentials!');
      });
  }
}
