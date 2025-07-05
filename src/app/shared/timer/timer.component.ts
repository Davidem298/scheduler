import { NgIf } from '@angular/common';
import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [NgIf],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  durata = input<number>(0); // signale in input (sola lettura)
  rimanente = signal(0); // segnale modificabile
  private intervalId: any; // serve per fermare il setInterval
  timerAttivo = false;

  constructor() {
    effect(() => {
      this.rimanente.set(this.durata()); // per aggiornare il countdown del timer
    });
  }

  iniziaCountdown() {
    if (this.intervalId) clearInterval(this.intervalId); // per pulire il codice di intervallo
    this.timerAttivo = true;

    this.intervalId = setInterval(() => {
      // perché una funzione normale passata come parametro perde il contesto e quindi non è possibile usare this al suo interno
      if (this.rimanente() > 0) {
        this.rimanente.update((value) => value - 1);
      } else {
        this.timerAttivo = false;
        this.rimanente.set(this.durata()); // rimetto la stessa durata perché se viene riassegnata l'input non percepisce il cambiamento

        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }, 1000);
  }
}
