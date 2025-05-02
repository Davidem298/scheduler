import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WorkingHardComponent } from './features/working-hard/working-hard.component';
import { AllenamentoComponent } from './features/allenamento/allenamento.component';
import { WhDashboardComponent } from './features/wh-dashboard/wh-dashboard.component';
import { AggiungiAllenamentoComponent } from './features/aggiungi-allenamento/aggiungi-allenamento.component';
import { AggiungiEsercizioComponent } from './features/aggiungi-esercizio/aggiungi-esercizio.component';
import { AddAllenamentiEserciziComponent } from './features/add-allenamenti-esercizi/add-allenamenti-esercizi.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'working-hard',
        component: WorkingHardComponent, // Parent component with <router-outlet>
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // default child
            { path: 'dashboard', component: WhDashboardComponent },
            { path: 'allenamento', component: AllenamentoComponent },
            { path: 'aggiungi-allenamento', component: AggiungiAllenamentoComponent },
            { path: 'aggiungi-esercizio', component: AggiungiEsercizioComponent },
            { path: 'aggiungi-allenamento-esercizio', component: AddAllenamentiEserciziComponent },
        ]
    },
];
