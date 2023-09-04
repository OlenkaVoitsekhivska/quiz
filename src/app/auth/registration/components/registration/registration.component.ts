//angular
import { Component } from '@angular/core';

//app
import { FormService } from 'src/app/core/services/form.service';
import { ButtonType } from 'src/app/core/models/button-type';
import { InputType } from 'src/app/core/models/input-type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  public emailLabel = 'Enter email:';

  public passwordLabel = 'Enter password:';

  public buttonLabel = 'Sign up';

  public emailType = InputType.EMAIL;

  public passwordType = InputType.PASSWORD;

  public buttonType = ButtonType.SUBMIT;

  constructor(public formService: FormService) {}
}
