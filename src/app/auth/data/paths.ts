import { Route } from '@angular/router';

export const paths: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/auth/login/login.module').then((mod) => mod.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('src/app/auth/registration/registration.module').then(
        (mod) => mod.RegistrationModule
      ),
  },
];
