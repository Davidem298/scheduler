import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './url';

@Injectable({
  providedIn: 'root'
})
export class ApiDeleteService {

  // private beUrl = 'http://192.168.1.240:3000/';

  constructor(private http: HttpClient) { }

  deleteData(URL: string) {
    const COMPLETE_URL = API_URL + URL;
    return this.http.delete(COMPLETE_URL);
  }
}
