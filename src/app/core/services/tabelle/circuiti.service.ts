import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiDeleteService,
  ApiGetService,
  ApiPostService,
  ApiPutService,
} from '../api';
import { Allenamento as Circuito } from '../../../shared/interfaces';
import { Errore, Successo } from '../../../shared/interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class CircuitiService {
  constructor(
    private apiGetSrv: ApiGetService,
    private apiPostSrv: ApiPostService,
    private apiPutSrv: ApiPutService,
    private apiDelSrv: ApiDeleteService
  ) {}

  private endpoint = 'allenamentiEsercizi/';

  getAll(): Observable<Circuito[]> {
    return this.apiGetSrv.getData<Circuito>(this.endpoint);
  }

  getOne(ID: number): Observable<Circuito> {
    const URL = this.endpoint + ID;
    return this.apiGetSrv.getOneData<Circuito>(URL);
  }

  create(DATA: Circuito): Observable<Errore | Successo> {
    return this.apiPostSrv.postData<Circuito>(this.endpoint, DATA);
  }

  edit(ID: string, DATA: Circuito): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiPutSrv.putData<Circuito>(URL, DATA);
  }

  delete(ID: string): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiDelSrv.deleteData(URL);
  }
}
