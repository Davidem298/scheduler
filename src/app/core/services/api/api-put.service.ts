import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './url';
import { Observable } from 'rxjs';
import { Errore, Successo } from '../../../shared/interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class ApiPutService {

  constructor(private http: HttpClient) {}

  putData<T>(URL: string, BODY: T): Observable<Successo | Errore> {
    const COMPLETE_URL = API_URL + URL;
    return this.http.put<Errore | Successo>(COMPLETE_URL, BODY);
  }
}
