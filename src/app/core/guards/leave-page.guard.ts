import { CanActivateFn } from '@angular/router';

export const leavePageGuard: CanActivateFn = (route, state) => {
  const userResponse = confirm('YOU SURE YOU WANNA LEAVE?');
  return !!userResponse;
};
