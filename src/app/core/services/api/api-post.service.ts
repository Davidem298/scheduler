import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Errore, Successo } from '../../../shared/interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class ApiPostService {
  private beUrl = 'http://192.168.1.240:3000/';

  constructor(private http: HttpClient) {}

  postData<T>(URL: string, BODY: T): Observable<Errore | Successo> {
    const COMPLETE_URL = this.beUrl + URL;
    return this.http.post<Errore | Successo>(COMPLETE_URL, BODY);
  }
}
