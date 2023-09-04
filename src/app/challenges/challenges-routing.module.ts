import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/challenges/home/home.module').then(
        (mod) => mod.HomeModule
      ),
  },
  {
    path: 'singleOptionTranslation',
    loadChildren: () =>
      import('src/app/challenges/single-option/single-option.module').then(
        (mod) => mod.SingleOptionModule
      ),
  },
  {
    path: 'match',
    loadChildren: () =>
      import('src/app/challenges/match/match.module').then(
        (mod) => mod.MatchModule
      ),
  },
  {
    path: 'dragCases',
    loadChildren: () =>
      import('src/app/challenges/cases-drag/cases-drag.module').then(
        (mod) => mod.CasesDragModule
      ),
  },
  {
    path: 'enterAnswer',
    loadChildren: () =>
      import('src/app/challenges/enter-answer/enter-answer.module').then(
        (mod) => mod.EnterAnswerModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
