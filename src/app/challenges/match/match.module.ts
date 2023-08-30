import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchComponent } from './components/match/match.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MatchComponent }]),
    SharedModule,
  ],
})
export class MatchModule {}
