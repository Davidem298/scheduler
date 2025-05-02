import { Component } from '@angular/core';
import { FormComponent } from "../../shared/components/form/form.component";

@Component({
  selector: 'app-add-allenamenti-esercizi',
  imports: [FormComponent],
  templateUrl: './add-allenamenti-esercizi.component.html',
  styleUrl: './add-allenamenti-esercizi.component.css'
})
export class AddAllenamentiEserciziComponent {
  formElements = [
    { elementType: 'select', name: 'ID_ALLENAMENTO', id: 'allenamento', options: 'allenamenti', placeholder: 'Scegli un allenamento', keyField: 'ID_ALLENAMENTO', dataField: 'NOME' },
    { elementType: 'select', name: 'ID_ESERCIZIO', id: 'esercizio', options: 'esercizi', placeholder: 'Scegli un esercizio', keyField: 'ID_ESERCIZIO', dataField: 'NOME' },
    { elementType: 'input', type: 'number', name: 'NUM_SET', id: 'numSet', placeholder: 'Numero di set' },
    { elementType: 'input', type: 'number', name: 'NUM_REP', id: 'numRep', placeholder: 'Numero di ripetizioni' },
    { elementType: 'input', type: 'number', name: 'PESO', id: 'peso', placeholder: 'Carico (Kg)' },
    { elementType: 'input', type: 'number', name: 'RIPOSO_SET', id: 'riposoSet', placeholder: 'Riposo tra set (sec)' },
    { elementType: 'input', type: 'number', name: 'RIPOSO_ESERCIZI', id: 'riposoEx', placeholder: 'Riposo tra esercizi (sec)' },
    { elementType: 'input', type: 'number', name: 'INDICE', id: 'indice', placeholder: 'Indice (ordine della sequenza)' },
  ];
}
