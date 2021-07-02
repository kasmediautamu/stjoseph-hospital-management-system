import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




  const API_BASEURL = 'http://localhost:5000'



@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpClient {
  endpoint(path: string): string {
    return `${API_BASEURL}${path}`;
  }
}
