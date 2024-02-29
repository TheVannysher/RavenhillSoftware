import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from 'src/app/services/firebase/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  fb: FormBuilder = inject(FormBuilder);

  authService: AuthService = inject(AuthService);

  router: Router = inject(Router);

  loading = true;

  submiting = false;

  newUser = false;

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      if (user) {
        this.router.navigate(['/']);
      } else {
        this.loading = false;
      }
    });
    this.loginForm = this.fb.group({
      username: ['', [Validators.minLength(5), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  async login() {
    this.submiting = true;
    const { email, password } = this.loginForm.value;
    await this.authService.login(email, password);
    this.submiting = false;
  }

  async register() {
    this.submiting = true;
    const { email, password, username } = this.loginForm.value;
    await this.authService.register(email, password, username);
    this.submiting = false;
  }

  toggleRegister() {
    this.newUser = !this.newUser;
  }
}
