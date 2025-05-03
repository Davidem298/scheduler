import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  private beUrl = 'http://192.168.1.240:3000/';

  constructor(private http: HttpClient) { }

  getData<T>(URL: string): Observable<T[]> {
    const beUrl = this.beUrl + URL;
    return this.http.get<T[]>(beUrl);
  }

  getOneData<T>(URL: string): Observable<T> {
    const beUrl = this.beUrl + URL;
    return this.http.get<T>(beUrl);
  }
}
