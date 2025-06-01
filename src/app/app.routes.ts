import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WorkingHardComponent } from './features/working-hard/working-hard.component';
import { AllenamentoComponent } from './features/allenamento/allenamento.component';
import { WhDashboardComponent } from './features/wh-dashboard/wh-dashboard.component';
import { AggiungiAllenamentoComponent } from './features/gestione-allenamenti/gestione-allenament.component';
import { GestioneEserciziComponent } from './features/gestione-esercizi/gestione-esercizio.component';
import { GestioneCircuitiComponent } from './features/gestione-circuiti/gestione-circuiti.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'working-hard',
    component: WorkingHardComponent, // Parent component with <router-outlet>
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // default child
      { path: 'dashboard', component: WhDashboardComponent },
      { path: 'allenamento', component: AllenamentoComponent },
      { path: 'gestisci-allenamenti', component: AggiungiAllenamentoComponent },
      { path: 'gestisci-esercizi', component: GestioneEserciziComponent },
      {
        path: 'gestisci-circuiti',
        component: GestioneCircuitiComponent,
      },
    ],
  },
];
