import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { ApiGetService } from '../../core/services/api';
import { AllenamentoEsercizi } from '../../shared/interfaces';
import {
  ClockComponent,
  RedirectButtonComponent,
} from '../../shared/components';
import { TimerComponent } from "../../shared/timer/timer.component";

@Component({
  selector: 'app-allenamento',
  imports: [RouterModule, TimerComponent],
  templateUrl: './allenamento.component.html',
  styleUrl: './allenamento.component.css',
})
export class AllenamentoComponent implements OnInit {
  allenamento: AllenamentoEsercizi[] = [];
  indice_esercizi = 0;
  indice_set = 0;
  tempo = signal<number>(2);
  isRiposo = false;
  finished = false;
  timerObject = { duration: 5 };


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiGetService
  ) {}

  ngOnInit() {
    // per prendere i dati dell'allenamento corrente
    this.activatedRoute.queryParams.subscribe((params) => {
      const NOME_ALLENAMENTO = params['ALLENAMENTO'];

      const apiUrl = `allenamentiEsercizi/${NOME_ALLENAMENTO}/esercizi`;
      this.apiService.getData<AllenamentoEsercizi>(apiUrl).subscribe((DATA) => {
        this.allenamento = DATA;
        console.log(DATA);
      });
    });
  }

  onStart() {

  }

  onFinish() {

  }
}
