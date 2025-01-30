import { Component, Input } from '@angular/core';
import { Course } from '../course';
import { CourseTagsComponent } from '../course-tags/course-tags.component';
import { RouterModule } from '@angular/router';
import { ButtonDirective } from '../../../core/components/ui/button/button/button.directive';

@Component({
  selector: 'app-course-info',
  imports: [CourseTagsComponent, RouterModule, ButtonDirective],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css',
})
export class CourseInfoComponent {
  @Input() course!: Course;
}
