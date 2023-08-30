import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

import { CardModule } from 'primeng/card';
import { CardComponent } from './components/card/card.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerPipe } from './pipes/timer.pipe';
import { MatchCardComponent } from './components/match-card/match-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CardComponent,
    OptionCardComponent,
    TimerComponent,
    TimerPipe,
    MatchCardComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    CardModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    CardComponent,
    CardModule,
    OptionCardComponent,
    TimerComponent,
    TimerPipe,
    MatchCardComponent,
  ],
})
export class SharedModule {}
