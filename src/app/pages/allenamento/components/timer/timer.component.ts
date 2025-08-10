import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  durata = input(0); // segnale in input (sola lettura)
  rimanente = signal(0); // segnale modificabile
  timerAttivo = signal(false);
  private intervalId: any; // serve per fermare il setInterval
  inizioTimer = output();
  fineTimer = output();

  constructor() {
    effect(() => {
      this.rimanente.set(this.durata()); // per aggiornare il countdown del timer
    });
  }

  iniziaCountdown() {
    if (this.intervalId) clearInterval(this.intervalId); // per pulire il codice di intervallo
    this.timerAttivo.set(true);
    this.inizioTimer.emit();

    this.intervalId = setInterval(() => {
      // perché una funzione normale passata come parametro perde il contesto e quindi non è possibile usare this al suo interno
      if (this.rimanente() > 0) {
        this.rimanente.update((value) => value - 1);
      } else {
        this.fineTimer.emit();
        this.timerAttivo.set(false);
        this.rimanente.set(this.durata()); // rimetto la stessa durata perché se viene riassegnata l'input non percepisce il cambiamento

        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }, 1000);
  }
}
