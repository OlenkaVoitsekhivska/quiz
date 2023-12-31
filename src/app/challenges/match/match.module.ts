//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//app
import { SharedModule } from 'src/app/shared/shared.module';
import { MatchComponent } from './components/match/match.component';

@NgModule({
  declarations: [MatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MatchComponent }]),
    SharedModule,
  ],
})
export class MatchModule {}
