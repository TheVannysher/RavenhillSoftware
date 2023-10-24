import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from 'src/app/services/firebase/auth/auth.service';
import { RoutesPaths } from 'src/lib/enum/routes';
import * as tailwindColors from 'tailwindcss/colors';

type LoginFormData = { email: string, password: string } | null;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export default class LoginComponent implements OnInit {
  private authService: AuthService = inject(AuthService);

  private router: Router = inject(Router);

  private fb: FormBuilder = inject(FormBuilder);

  formData: LoginFormData = null;

  loading = true;

  submitLoading = false;

  colors = tailwindColors;

  loginForm: FormGroup;

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.router.navigate([RoutesPaths.DASHBOARD]);
      } else {
        this.loading = false;
      }
    });
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
      ]],
    });
    this.loginForm.valueChanges.subscribe((value: LoginFormData) => {
      this.formData = value;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validation(newValue: string) {
    if (newValue === '') {
      return true;
    }
    return false;
  }

  async onSubmit() {
    this.submitLoading = true;
    if (this.formData != null) {
      try {
        // login using firbase
        const { email, password } = this.formData;
        await this.authService.login(email, password);
        this.router.navigate([RoutesPaths.DASHBOARD]);
      } catch (error) {
        console.error(error);
      }
    }
    this.submitLoading = false;
  }
}
