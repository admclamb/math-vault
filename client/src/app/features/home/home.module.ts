import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home.service';
import { HomeCoursesTableComponent } from './home-courses-table/home-courses-table.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
  providers: [HomeService],
})
export class HomeModule {}
