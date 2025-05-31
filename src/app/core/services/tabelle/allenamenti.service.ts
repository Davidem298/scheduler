import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ApiDeleteService,
  ApiGetService,
  ApiPostService,
  ApiPutService,
} from '../api';
import { Allenamento } from '../../../shared/interfaces';
import { Errore, Successo } from '../../../shared/interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class AllenamentiService {
  constructor(
    private apiGetSrv: ApiGetService,
    private apiPostSrv: ApiPostService,
    private apiPutSrv: ApiPutService,
    private apiDelSrv: ApiDeleteService
  ) {}

  private endpoint = 'allenamenti/';

  getAll(): Observable<Allenamento[]> {
    return this.apiGetSrv.getData<Allenamento>(this.endpoint);
  }

  getOne(ID: number): Observable<Allenamento> {
    const URL = this.endpoint + ID;
    return this.apiGetSrv.getOneData<Allenamento>(URL);
  }

  create(DATA: Allenamento): Observable<Errore | Successo> {
    return this.apiPostSrv.postData<Allenamento>(this.endpoint, DATA);
  }

  edit(ID: string, DATA: Allenamento): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiPutSrv.putData<Allenamento>(URL, DATA);
  }

  delete(ID: string): Observable<Errore | Successo> {
    const URL = this.endpoint + ID;
    return this.apiDelSrv.deleteData(URL);
  }
}
