import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-courses-table',
  templateUrl: './home-courses-table.component.html',
  styleUrls: ['./home-courses-table.component.css'],
})
export class HomeCoursesTableComponent implements OnInit {
  courses: any[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCourses().subscribe((data: any[]) => {
      this.courses = data;
    });
  }
}
