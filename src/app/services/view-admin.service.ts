import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewAdmin } from '../models/view-admin';


@Injectable({
  providedIn: 'root'
})
export class ViewAdminService {
  apiURL: string = 'http://localhost:5000/data';

  constructor(private httpClient: HttpClient) { }

  public getAllEntries() {
    return this.httpClient.get<ViewAdmin[]>(this.apiURL);
  }
}
