import { CanActivateFn } from '@angular/router';

export const leavePageGuard: CanActivateFn = () => {
  const userResponse = confirm('YOU SURE YOU WANNA LEAVE?');
  return !!userResponse;
};
