import { Injectable } from '@angular/core';
import { ApiGetService } from '../api';
import { Allenamento } from '../../../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllenamentiService {
  constructor(private apiGetSrv: ApiGetService) {}

  getAll(): Observable<Allenamento[]> {
    const URL = 'allenamenti';
    return this.apiGetSrv.getData<Allenamento>(URL);
  }

  getOne(ID: number): Observable<Allenamento> {
    const URL = 'allenamenti/' + ID;
    return this.apiGetSrv.getOneData<Allenamento>(URL);
  }
}
