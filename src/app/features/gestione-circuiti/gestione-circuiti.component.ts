import { Component, signal } from '@angular/core';
import { FormComponent } from '../../shared/components/form-index';
import { CircuitiService } from '../../core/services/tabelle';
import { formElements } from '../../shared/data';

@Component({
  selector: 'app-gestione-circuiti',
  imports: [FormComponent],
  templateUrl: './gestione-circuiti.component.html',
  styleUrl: './gestione-circuiti.component.css',
})
export class GestioneCircuitiComponent {
  formElements = formElements;

  constructor(private circuitiSrv: CircuitiService) {}

  isLoading = false;
  loading = signal(false); // stato reattivo
  modeOptions = [
    {
      label: 'Crea circuito',
      realValue: 'insert',
      toastMessage: 'Circuito aggiunto con successo!',
    },
    {
      label: 'Modifica circuito',
      realValue: 'edit',
      toastMessage: 'Circuito modificato con successo!',
    },
    {
      label: 'Elimina circuito',
      realValue: 'delete',
      toastMessage: 'Circuito eliminato con successo!',
    },
  ];

  onSubmit(event: { data: any; mode: string; selectedID: string }) {
    this.isLoading = true;

    const MODE = event.mode;
    const DATA = event.data;
    const ID = event.selectedID;

    if (MODE === 'insert') {
      this.circuitiSrv.create(DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore nella creazione:', err);
        },
      });
    } else if (MODE === 'edit') {
      this.circuitiSrv.edit(ID, DATA).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la modifica:', err);
        },
      });
    } else if (MODE === 'delete') {
      this.circuitiSrv.delete(ID).subscribe({
        next: (MESSAGE) => {
          this.isLoading = false;
          console.log(MESSAGE);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Errore durante la cancellazione:', err);
        },
      });
    }
  }
}
