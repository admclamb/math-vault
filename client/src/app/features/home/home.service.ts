import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get(`${this.baseUrl}/api/v1/courses`);
  }
}
