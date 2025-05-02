import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Allenamento } from '../../interfaces';

@Component({
  selector: 'app-card-allenamento',
  imports: [],
  templateUrl: './card-allenamento.component.html',
  styleUrl: './card-allenamento.component.css'
})
export class CardAllenamentoComponent {
  @Input() allenamento!: Allenamento;
  @Output() cardClicked = new EventEmitter<any>();

  onClick(ID_ALLENAMENTO: number) {
    this.cardClicked.emit(ID_ALLENAMENTO); // send the data to parent
  }
}
