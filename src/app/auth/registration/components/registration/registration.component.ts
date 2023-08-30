import { Component } from '@angular/core';
import { ButtonType } from 'src/app/core/models/button-type';
import { InputType } from 'src/app/core/models/input-type';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  emailLabel = 'Enter email:';
  passwordLabel = 'Enter password:';
  buttonLabel = 'Sign up';

  emailType = InputType.EMAIL;
  passwordType = InputType.PASSWORD;
  buttonType = ButtonType.SUBMIT;

  constructor(public formService: FormService) {}
}
