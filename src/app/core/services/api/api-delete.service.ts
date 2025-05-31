import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './url';
import { Errore, Successo } from '../../../shared/interfaces/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDeleteService {
  constructor(private http: HttpClient) {}

  deleteData(URL: string): Observable<Errore | Successo> {
    const COMPLETE_URL = API_URL + URL;
    return this.http.delete<Errore | Successo>(COMPLETE_URL);
  }
}
