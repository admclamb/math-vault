import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from '../../../core/components/layout/layout.component';
import { CourseInfoComponent } from '../course-info/course-info.component';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorMessage } from '../../../core/errors/error';
import { PageLoaderComponent } from '../../../core/components/loader/page-loader/page-loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [
    CommonModule,
    LayoutComponent,
    CourseInfoComponent,
    PageLoaderComponent,
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent implements OnInit {
  course: Course | null = null;
  isLoading: boolean = false;
  error: ErrorMessage | null = null;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const courseName = decodeURIComponent(
      this.route.snapshot.paramMap.get('courseName') ?? ''
    );

    if (!courseName) {
      this.error = {
        status: 400,
        message: 'A course name is required.',
      };
      return;
    }
    this.isLoading = true;
    this.courseService.getCourse(courseName).subscribe(
      (data: Course) => {
        this.course = data;
        this.isLoading = false;
      },
      (err) => {
        if (err) {
          this.error = {
            status: err.status,
            message: err.message,
          };
        }
        this.isLoading = false;
      }
    );
  }
}
