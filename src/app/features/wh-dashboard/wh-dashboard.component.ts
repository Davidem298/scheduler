
import { Component, OnInit } from '@angular/core';
import { ApiGetService } from '../../core/services/api/api-get.service';
import { Router, } from '@angular/router';
import { Allenamento } from '../../shared/interfaces';
import { CardAllenamentoComponent } from '../../shared/components/card-allenamento/card-allenamento.component';

@Component({
  selector: 'app-wh-dashboard',
  imports: [CardAllenamentoComponent],
  templateUrl: './wh-dashboard.component.html',
  styleUrl: './wh-dashboard.component.css'
})
export class WhDashboardComponent implements OnInit {
  allenamenti:Allenamento[] = [];

  constructor(private api: ApiGetService, private router: Router) {}

  ngOnInit() {
    const apiUrl = 'allenamenti';
    this.api.getData<Allenamento>(apiUrl).subscribe((DATA) => {
      this.allenamenti = DATA;
    })
  }

  onCardClicked(ID_ALLENAMENTO: number) {
    this.router.navigate(['/working-hard/allenamento'], { queryParams: { ALLENAMENTO: ID_ALLENAMENTO } });
  }

  goToComponent(path: string) {
    this.router.navigate([`/working-hard/${path}`])
  }
}
