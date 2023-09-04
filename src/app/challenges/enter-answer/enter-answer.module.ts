import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrittenAnswerComponent } from './written-answer/written-answer.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WrittenAnswerComponent,
    RouterModule.forChild([{ path: '', component: WrittenAnswerComponent }]),
    ChartModule,
  ],
})
export class EnterAnswerModule {}
