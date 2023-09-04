//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//app
import { SharedModule } from 'src/app/shared/shared.module';

import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrationComponent,
      },
    ]),
  ],
})
export class RegistrationModule {}
