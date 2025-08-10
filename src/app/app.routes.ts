import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkingHardComponent } from './pages/working-hard/working-hard.component';
import { AllenamentoComponent } from './pages/allenamento/allenamento.component';
import { WhDashboardComponent } from './pages/wh-dashboard/wh-dashboard.component';
import { AggiungiAllenamentoComponent } from './pages/gestione-allenamenti/gestione-allenament.component';
import { GestioneEserciziComponent } from './pages/gestione-esercizi/gestione-esercizio.component';
import { GestioneCircuitiComponent } from './pages/gestione-circuiti/gestione-circuiti.component';

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
