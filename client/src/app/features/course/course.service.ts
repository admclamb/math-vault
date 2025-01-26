import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl: string = environment.apiUrl ?? '';

  constructor(private http: HttpClient) {}

  getCourse(courseName: string): Observable<Course> {
    return this.http.get<Course>(
      `${this.apiUrl}/api/v1/course/name/${encodeURIComponent(courseName)}`
    );
  }
}
