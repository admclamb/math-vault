import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './features/home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeModule],
  imports: [CommonModule, FontAwesomeModule],
})
export class AppModule {}
