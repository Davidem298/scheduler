import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPostService {

  private beUrl = 'http://192.168.1.240:3000/';

  constructor(private http: HttpClient) { }

  postData<T_IN>(URL: string, BODY: T_IN): Observable<string> {
    const COMPLETE_URL = this.beUrl + URL;
    return this.http.post<string>(COMPLETE_URL, BODY);
  }
}
