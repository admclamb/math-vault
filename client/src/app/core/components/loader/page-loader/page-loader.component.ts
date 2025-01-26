import { Component } from '@angular/core';
import { LoaderComponent } from '../loader.component';

@Component({
  selector: 'app-page-loader',
  imports: [LoaderComponent],
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.css',
})
export class PageLoaderComponent {}
