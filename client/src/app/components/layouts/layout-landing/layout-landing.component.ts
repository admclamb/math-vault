import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbars/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout-landing',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.css',
})
export class LayoutLandingComponent {}
