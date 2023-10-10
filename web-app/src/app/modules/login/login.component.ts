import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/firebase/auth/auth.service';
import { ROUTES_PATH } from 'src/lib/enum/routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as tailwindColors from 'tailwindcss/colors';

type LoginFormData = { email: string, password: string } | null;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private authService: AuthService = inject(AuthService);
  private router:Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);
  formData: LoginFormData = null;
  loading: boolean = true;
  submitLoading: boolean = false;
  colors = tailwindColors;
  loginForm: FormGroup;

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate([ROUTES_PATH.vines]);
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
    })
  }

  validation(newValue:string) {
    if(newValue === '') {
      return true;
    }
    return false;
  }

  async onSubmit() {
    this.submitLoading = true;
    if (this.formData != null) {
      console.log(this.formData)
      try {
        // login using firbase
        const { email, password } = this.formData;
        await this.authService.login(email, password);
        this.router.navigate([ROUTES_PATH.vines]);
      } catch (error) {
        console.error(error);
      }
    }
    this.submitLoading = false;
  }
}
