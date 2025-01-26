import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CourseComponent }]),
  ],
  providers: [CourseService],
})
export class CourseModule {}
