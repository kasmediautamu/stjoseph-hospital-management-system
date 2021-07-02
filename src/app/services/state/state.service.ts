import { Injectable } from "@angular/core";
import { ApiService } from '../api.service';
import { Observable } from "rxjs";
import { STATETYPE } from "../type";



@Injectable({
  providedIn: "root"
})
export class StateService {
  private stateUrl = "/states";

  constructor(private http: ApiService) {

  }

  getStates(): Observable<STATETYPE[]> {
    return this.http.get<STATETYPE[]>(this.http.endpoint(this.stateUrl))
  }

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

}


