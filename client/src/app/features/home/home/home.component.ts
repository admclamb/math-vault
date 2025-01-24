import { Component } from '@angular/core';
import { LayoutComponent } from '../../../core/components/layout/layout.component';
import { HomeCoursesTableComponent } from '../home-courses-table/home-courses-table.component';

@Component({
  selector: 'app-home',
  imports: [LayoutComponent, HomeCoursesTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
