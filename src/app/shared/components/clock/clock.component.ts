import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ObjectEncodingOptions } from 'fs';

@Component({
  selector: 'app-clock',
  imports: [NgIf],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnDestroy {
  // @Input()
  // set duration(value: number) {
  //   this._duration = value;
  //   this.secondsLeft = value;
  // }
  @Input() set timerObj(obj: { duration: number }) {
    if (obj) {
      this.duration = obj.duration;
      this.secondsLeft = obj.duration;
    }
  }
  @Input() mode!: string;
  @Output() countdownStarted = new EventEmitter<void>();
  @Output() countdownFinished = new EventEmitter<void>();

  secondsLeft = 0;
  isRunning = false;

  private intervalId: any;

  duration: number = 0;

  start() {
    this.countdownStarted.emit(); // notify parent
    if (this.isRunning || this.secondsLeft <= 0) return;

    this.isRunning = true;
    this.intervalId = setInterval(() => {
      this.secondsLeft--;

      if (this.secondsLeft <= 0) {
        this.finishCountdown();
      }
    }, 1000);
  }

  pause() {
    this.clearTimer();
  }

  reset() {
    this.clearTimer();
    this.secondsLeft = this.duration;
  }

  private finishCountdown() {
    this.clearTimer();
    this.playSound();
    this.countdownFinished.emit(); // notify parent
  }

  private clearTimer() {
    clearInterval(this.intervalId);
    this.isRunning = false;
  }

  private playSound() {
    const audio = new Audio('fiscio.mp3'); // make sure the file exists
    audio.play();
  }

  ngOnDestroy() {
    this.clearTimer();
  }
}
