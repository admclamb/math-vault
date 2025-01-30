import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button appButton [variant]="variant" [size]="size">
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {
  @Input() variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link' = 'default';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
}
