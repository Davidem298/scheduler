import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ToastMessage {
  text: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messageSubject = new BehaviorSubject<ToastMessage | null>(null);
  message$ = this.messageSubject.asObservable();

  showSuccess(message: string) {
    this.messageSubject.next({ text: message, type: 'success' });
    this.autoClear();
  }

  showError(message: string) {
    this.messageSubject.next({ text: message, type: 'error' });
    this.autoClear();
  }

  private autoClear() {
    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.messageSubject.next(null);
  }
}
