import { Component } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';
import { ApiPostService } from '../../core/services/api/api-post.service';
import { EsercizioForm } from '../../shared/interfaces/esercizioForm.model';

@Component({
  selector: 'app-aggiungi-esercizio',
  imports: [ FormComponent ],
  templateUrl: './aggiungi-esercizio.component.html',
  styleUrl: './aggiungi-esercizio.component.css'
})
export class AggiungiEsercizioComponent {
  formElements = [
    { elementType: 'input', name: 'NOME', id: 'NOME', placeholder: 'Nome dell\'esercizio' },
    { elementType: 'textarea', name: 'DESCRIZIONE', id: 'DESCRIZIONE', placeholder: 'Descrizione dell\'esercizio' },
  ];

}
