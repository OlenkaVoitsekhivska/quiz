import { Component } from '@angular/core';
import { ButtonType } from 'src/app/core/models/button-type';
import { InputType } from 'src/app/core/models/input-type';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  emailLabel = 'Enter email:';
  passwordLabel = 'Enter password:';
  buttonLabel = 'Sign in';
  googleSigninBtnLabel = 'Sign in with google';

  emailType = InputType.EMAIL;
  passwordType = InputType.PASSWORD;
  buttonType = ButtonType.SUBMIT;

  constructor(public formService: FormService) {}
}
