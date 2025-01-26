import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-info',
  imports: [],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css',
})
export class CourseInfoComponent {
  @Input() course!: Course;
}
