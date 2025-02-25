import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'course/:courseName',
    loadChildren: () =>
      import('./features/course/course.module').then((m) => m.CourseModule),
  },
  {
    path: 'course/:courseName/study',
    loadChildren: () =>
      import('./features/study/study.module').then((m) => m.StudyModule),
  },
];
