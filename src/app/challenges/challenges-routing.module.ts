import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengesRoutingModule {}
