import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private beUrl = 'http://192.168.1.240:3000';

  constructor(private http: HttpClient) { }

  getData<T>(url: string): Observable<T[]> {
    const beUrl = `http://192.168.1.240:3000/${url}`;
    return this.http.get<T[]>(beUrl);
  }
}
