import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const isLoggedIn = !!window.localStorage.getItem('access-token');
  if (!isLoggedIn) {
    _router.navigate(['user', 'login']);
  }
  return isLoggedIn;
};
