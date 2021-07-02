import { Injectable } from "@angular/core";
import { ApiService } from '../api.service';
import { Observable } from "rxjs";
import { COLUMNTYPE } from "../type";



@Injectable({
  providedIn: "root"
})
export class ColumnService {
  private columnUrl = "/columns";

  constructor(private http: ApiService) {

  }

  getColumns(): Observable <COLUMNTYPE[]>{
    return this.http.get<COLUMNTYPE[]>(this.http.endpoint(this.columnUrl))
  }

}
function columns(columns: any) {
  throw new Error("Function not implemented.");
}

