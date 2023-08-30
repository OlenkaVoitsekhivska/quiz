import { FormControl } from '@angular/forms';

export interface AuthForm {
  email: FormControl;
  password: FormControl;
  repeatPassword?: FormControl;
}
