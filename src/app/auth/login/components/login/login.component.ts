//angular
import { Component } from '@angular/core';

//app
import { FormService } from 'src/app/core/services/form.service';

import { ButtonType } from 'src/app/core/models/button-type';
import { InputType } from 'src/app/core/models/input-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public emailLabel = 'Enter email:';

  public passwordLabel = 'Enter password:';

  public buttonLabel = 'Sign in';

  public googleSigninBtnLabel = 'Sign in with google';

  public signupLabel = 'Sign up';

  public emailType = InputType.EMAIL;

  public passwordType = InputType.PASSWORD;

  public buttonType = ButtonType.SUBMIT;

  constructor(public formService: FormService) {}
}
