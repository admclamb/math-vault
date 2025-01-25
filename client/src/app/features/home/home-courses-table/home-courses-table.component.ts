import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Course } from '../../courses/course';
import { CommonModule } from '@angular/common';
import { Topic } from '../../courses/topic';
import dayjs from 'dayjs';

@Component({
  selector: 'app-home-courses-table',
  templateUrl: './home-courses-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./home-courses-table.component.css'],
})
export class HomeCoursesTableComponent implements OnInit {
  courses: Course[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getCourses().subscribe((data: Course[]) => {
      console.log('DATA: ', data);
      this.courses = data as any[];
    });
  }

  formatTopicsToString(topics: Topic[]): string {
    return topics.map((topic) => topic.name).join(', ');
  }

  formatDate(date: Date): string {
    return dayjs(date).format('MMMM D, YYYY');
  }
}
