import { Component } from '@angular/core';
import {
  faPlus,
  faMinus,
  faDivide,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  faPlus = faPlus;
  faMultiply = faXmark;
  faDivide = faDivide;
  faMinus = faMinus;
}
