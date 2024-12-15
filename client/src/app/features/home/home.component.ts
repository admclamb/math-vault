import { Component } from '@angular/core';
import { LayoutLandingComponent } from '../../components/layouts/layout-landing/layout-landing.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutLandingComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
