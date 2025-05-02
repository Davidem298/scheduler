import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { ApiService } from '../../core/services/api';
import { AllenamentoEsercizi } from '../../shared/interfaces';
import { ClockComponent, RedirectButtonComponent } from '../../shared/components';

@Component({
  selector: 'app-allenamento',
  imports: [RouterModule, ClockComponent, NgIf, RedirectButtonComponent],
  templateUrl: './allenamento.component.html',
  styleUrl: './allenamento.component.css'
})
export class AllenamentoComponent implements OnInit {

  allenamento: AllenamentoEsercizi[] = [];
  indice_esercizi = 0;
  indice_set = 0;
  mode = 'riposo';
  isFirst = true;
  finished = false;
  timerObject = { duration: 3 }; // instead of just a number

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const NOME_ALLENAMENTO = params['ALLENAMENTO'];

      const apiUrl = `allenamentiEsercizi/${NOME_ALLENAMENTO}`;
      this.apiService.getData<AllenamentoEsercizi>(apiUrl).subscribe((DATA) => {
          console.log(DATA);
          this.allenamento = DATA;
      });
    });
  }

  onStart() {
    /* Cambio la modalità */
    if(!this.isFirst) {
      if(this.mode === 'riposo') {
        this.mode = 'esecuzione';
      } else {
        this.mode = 'riposo';
      }
    } else {
      this.isFirst = false;
    }
    if(this.indice_set !== this.allenamento[this.indice_esercizi].NUM_SET) {
      this.indice_set++;
    } else {
      if(this.indice_esercizi !== this.allenamento.length-1) {
        this.indice_esercizi++;
        this.indice_set = 1;
      } else {
        this.finished = true;
      }
    }
  }

  onFinish() {
    /* Cambio la modalità */
    if(this.mode === 'riposo') {
      this.mode = 'esecuzione';
    } else {
      this.mode = 'riposo';
    }
    console.log(this.indice_set);
    if(this.indice_set !== this.allenamento[this.indice_esercizi].NUM_SET) {
      this.timerObject = { duration: this.allenamento[this.indice_esercizi].RIPOSO_SET };
    } else {
      this.timerObject = { duration: this.allenamento[this.indice_esercizi].RIPOSO_ESERCIZI };
    }
  }

  goToHomepage() {
    this.router.navigate(['/working-hard/dashboard'])
  }
}
