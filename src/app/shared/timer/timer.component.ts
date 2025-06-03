import { Component, effect, input, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent {
  durata = input<number>(0);
  rimanente = signal(this.durata());

  constructor() {
    effect(() => {
      console.log(this.durata());
      this.rimanente.set(this.durata()); // per aggiornare il countdown del timer
    });
  }

  inizia() {
    // setTimeout(this.finito, this.rimanente());

    console.log(this.rimanente());
    setInterval(this.decrementa, 1000);
  }

  decrementa() {
    console.log(this.rimanente());
    if (this.rimanente) {
      this.rimanente.update((value) => value - 1000);
    }
    // clearInterval();
  }

  finito() {
    console.log('finito');
  }
}
