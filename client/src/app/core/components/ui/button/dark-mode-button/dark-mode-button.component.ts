import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dark-mode-button',
  imports: [ButtonComponent],
  templateUrl: './dark-mode-button.component.html',
  styleUrl: './dark-mode-button.component.css',
})
export class DarkModeButtonComponent {}
