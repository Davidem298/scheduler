import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class ApiPutService {

  // private beUrl = 'http://192.168.1.240:3000/';

  constructor(private http: HttpClient) { }

  putData<T>(URL: string, BODY: T) {
    const COMPLETE_URL = API_URL + URL;
    return this.http.put(COMPLETE_URL, BODY);
  }
}
