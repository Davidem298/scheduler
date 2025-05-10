import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  // private beUrl = 'http://192.168.0.104:3000/';

  constructor(private http: HttpClient) { }

  getData<T>(URL: string): Observable<T[]> {
    const beUrl = API_URL + URL;
    return this.http.get<T[]>(beUrl);
  }

  getOneData<T>(URL: string): Observable<T> {
    const beUrl = API_URL + URL;
    return this.http.get<T>(beUrl);
  }
}
