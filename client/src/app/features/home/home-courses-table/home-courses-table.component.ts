import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Course } from '../../course/course';
import { CommonModule } from '@angular/common';
import { Topic } from '../../course/topic';
import dayjs from 'dayjs';
import { Router } from '@angular/router';
import { Tag } from '../../course/tag';

@Component({
  selector: 'app-home-courses-table',
  templateUrl: './home-courses-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./home-courses-table.component.css'],
})
export class HomeCoursesTableComponent implements OnInit {
  courses: Course[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.homeService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  formatTagsToString(tags: Tag[]): string {
    return tags.map((tag) => tag.name).join(', ');
  }

  formatDate(date: Date): string {
    return dayjs(date).format('MMMM D, YYYY');
  }

  redirectToCourse(courseName: string): void {
    this.router.navigate(['/course', encodeURIComponent(courseName)]);
  }
}
