import { Component } from '@angular/core';
import { LayoutLandingComponent } from '../../components/layouts/layout-landing/layout-landing.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LayoutLandingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
