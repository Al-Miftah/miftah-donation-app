import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  /**
   * set user
   */
  public set user(user: any) {
    window.localStorage.setItem(btoa('user'), btoa(JSON.stringify(user)));
  }

  /**
   * get user
   */
  public get user(): any {
    if (window.localStorage.getItem(btoa('user'))) {
      return JSON.parse(atob(window.localStorage.getItem(btoa('user'))));
    }
    return null;
  }

  /**
   * set accessToken
   */
  public set accessToken(token: any) {
    window.localStorage.setItem(btoa('accessToken'), btoa(token));
  }

  /**
   * get accessToken
   */
  public get accessToken(): any {
    if (window.localStorage.getItem(btoa('accessToken'))) {
      return atob(window.localStorage.getItem(btoa('accessToken')));
    }
    return null;
  }

  /**
   * set tokenExpiration
   */
  public set tokenExpiration(time: string) {
    window.localStorage.setItem(btoa('tokenExpiration'), btoa(time));
  }

  /**
   * get tokenExpiration
   */
  public get tokenExpiration(): string {
    if (window.localStorage.getItem(btoa('tokenExpiration'))) {
      return atob(window.localStorage.getItem(btoa('tokenExpiration')));
    }
    return null;
  }

  /**
   * isAuthenticated
   */
  public isAuthenticated(): boolean {
    if (this.accessToken) {
      const expDate = new Date(this.tokenExpiration);
      const date = new Date();
      return date.getTime() < expDate.getTime();
    }
    return false;
  }

  /**
   * clearData
   */
  public clearCache(): any {
    window.localStorage.removeItem(btoa('user'));
    window.localStorage.removeItem(btoa('accessToken'));
    window.localStorage.removeItem(btoa('tokenExpiration'));
  }
}
