import { Component, computed, signal } from '@angular/core';
import { FormComponent } from "../../shared/components/form/form.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-aggiungi-allenamento',
  imports: [FormComponent],
  templateUrl: './aggiungi-allenamento.component.html',
  styleUrl: './aggiungi-allenamento.component.css'
})
export class AggiungiAllenamentoComponent {
  addAllenamentoFormElements = {
    "Aggiungi" : [
      { elementType: 'input', name: 'NOME', id: 'NOME', placeholder: 'Nome dell\'allenamento' },
      { elementType: 'textarea', name: 'DESCRIZIONE', id: 'DESCRIZIONE', placeholder: 'Descrizione dell\'allenamento' },
    ],
    "Modifica" : [
      { elementType: 'select', name: 'ID_ALLENAMENTO', id: 'allenamento', options: 'allenamenti', placeholder: 'Scegli un allenamento', keyField: 'ID_ALLENAMENTO', dataField: 'NOME' },
      { elementType: 'input', name: 'NOME', id: 'NOME', placeholder: 'Nome dell\'allenamento' },
      { elementType: 'textarea', name: 'DESCRIZIONE', id: 'DESCRIZIONE', placeholder: 'Descrizione dell\'allenamento' },
    ]
  };

}
