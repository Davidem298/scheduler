import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiDeleteService,
  ApiGetService,
  ApiPostService,
  ApiPutService,
} from '../api';
import { Allenamento as Esercizio } from '../../../shared/interfaces';
import { Errore, Successo } from '../../../shared/interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class EserciziService {
  constructor(
    private apiGetSrv: ApiGetService,
    private apiPostSrv: ApiPostService,
    private apiPutSrv: ApiPutService,
    private apiDelSrv: ApiDeleteService
  ) {}

  private endpoint = 'esercizi/';

  getAll(): Observable<Esercizio[]> {
    return this.apiGetSrv.getData<Esercizio>(this.endpoint);
  }

  getOne(ID: number): Observable<Esercizio> {
    const URL = this.endpoint + ID;
    return this.apiGetSrv.getOneData<Esercizio>(URL);
  }

  create(DATA: Esercizio): Observable<Errore | Successo> {
    return this.apiPostSrv.postData<Esercizio>(this.endpoint, DATA);
  }

  edit(ID: string, DATA: Esercizio): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiPutSrv.putData<Esercizio>(URL, DATA);
  }

  delete(ID: string): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiDelSrv.deleteData(URL);
  }
}
