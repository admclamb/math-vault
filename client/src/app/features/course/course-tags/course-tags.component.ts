import { Component, Input } from '@angular/core';
import { Tag } from '../tag';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-tags',
  imports: [CommonModule, RouterModule],
  templateUrl: './course-tags.component.html',
  styleUrl: './course-tags.component.css',
})
export class CourseTagsComponent {
  @Input() tags!: Tag[];
}
