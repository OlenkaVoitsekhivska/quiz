import { Route } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { leavePageGuard } from '../guards/leave-page.guard';
// import { AuthGuard } from '@angular/fire/auth-guard';

export const appPaths: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/home/home.module').then((mod) => mod.HomeModule),
    canActivate: [authGuard],
    canDeactivate: [leavePageGuard],
  },
  {
    path: 'challenges',
    loadChildren: () =>
      import('src/app/challenges/challenges.module').then(
        (mod) => mod.ChallengesModule
      ),
  },
];
