import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthForm } from '../models/auth-form';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  form!: FormGroup<AuthForm>;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeForm();
    this.authService.getCurrentUser();
  }
  /* PUBLIC METHODS*/
  public async handleSingin() {
    this.isLoading = true;

    const { email, password } = this.form.value;
    const signinResult = await this.authService.signIn(email, password);
    console.log(signinResult);
    this.isLoading = false;
    this.router.navigate(['home']);
  }

  public handleGoogleSignin() {
    this.authService
      .signInGoogle()
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((error) => console.log(error));
  }

  public async handleRegistration() {
    this.isLoading = true;
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(console.log('SIGN UP')), 1500);
    });
    this.isLoading = false;
  }

  /*PRIVATE METHODS*/
  private initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
