import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiGetService } from '../../core/services/api';
import { AllenamentoEsercizi } from '../../shared/interfaces';
import { TimerComponent } from './components/timer/timer.component';

@Component({
  selector: 'app-allenamento',
  imports: [RouterModule, TimerComponent],
  templateUrl: './allenamento.component.html',
  styleUrl: './allenamento.component.css',
})
export class AllenamentoComponent implements OnInit {
  allenamento = signal<AllenamentoEsercizi[]>([]);
  indice_esercizi = signal(0);
  indice_set = signal(0);
  tempo = signal(5); // tempo di preparazione all'inzio del primo set
  stato = signal<'preview' | 'esecuzione'>('preview');

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiGetService
  ) {}

  ngOnInit() {
    // per prendere i dati dell'allenamento corrente
    this.activatedRoute.queryParams.subscribe((params) => {
      const indiceAllenamento = params['ALLENAMENTO'];
      const apiUrl = `allenamentiEsercizi/${indiceAllenamento}/esercizi`;

      this.apiService.getData<AllenamentoEsercizi>(apiUrl).subscribe((DATA) => {
        this.allenamento.set(DATA);
        console.log(this.allenamento()[this.indice_esercizi()]);
      });
    });
  }

  onStart() {
    // per capire se devo passare al prossimo esercizio o al prossimo set
    if (
      this.allenamento()[this.indice_esercizi()].NUM_SET <= this.indice_set()
    ) {
      this.indice_set.update((value) => value + 1);
    } else {
      if (this.allenamento()[this.indice_esercizi() + 1]) {
        // se esiste un altro esercizio dopo
        this.indice_esercizi.update((value) => value + 1);
        this.indice_set.set(1);
      } else {
        // fino esercizio
      }
    }
  }

  onFinish() {}
}
