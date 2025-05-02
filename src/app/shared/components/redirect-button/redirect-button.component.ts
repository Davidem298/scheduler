import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-redirect-button',
  imports: [],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.css'
})
export class RedirectButtonComponent {

  constructor(private router: Router) {}

  goToHomepage() {
    this.router.navigate(['/working-hard/dashboard'])
  }
}
