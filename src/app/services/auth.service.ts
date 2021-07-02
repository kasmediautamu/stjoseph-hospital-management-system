import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  private _viewAdmin: boolean = false;
  private _loggedIn: boolean = false;

  get viewAdmin(): boolean {
    return this._viewAdmin;
  }

  set viewAdmin(viewAdmin: boolean) {
    this._viewAdmin = viewAdmin;
  }

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  set loggedIn(loggedIn: boolean) {
    this._loggedIn = loggedIn;
  }

  constructor() {

  }

}


