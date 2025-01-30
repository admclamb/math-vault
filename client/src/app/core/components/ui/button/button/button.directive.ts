import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective implements OnChanges {
  @Input() variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link' = 'default';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['variant']?.currentValue || changes['size']?.currentValue) {
      this.applyClasses();
    }
  }

  private applyClasses(): void {
    const classList = [
      'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      this.getVariantClass(),
      this.getSizeClass(),
    ].join(' ');

    this.renderer.setAttribute(this.el.nativeElement, 'class', classList);
  }

  private getVariantClass(): string {
    const variants = {
      default: 'bg-blue-600 text-blue-100 shadow hover:bg-blue-500',
      destructive: 'bg-red-600 text-red-100 shadow-sm hover:bg-red-500',
      outline:
        'border border-slate-500 bg-background shadow-sm hover:bg-slate-700 hover:text-slate-100',
      secondary: 'bg-slate-500 text-slate-200 shadow-sm hover:bg-slate-400',
      ghost: 'hover:bg-slate-700 hover:text-slate-100',
      link: 'text-slate-400 underline-offset-4 hover:underline',
    };
    return variants[this.variant] || variants.default;
  }

  private getSizeClass(): string {
    const sizes = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'h-9 w-9',
    };
    return sizes[this.size] || sizes.default;
  }
}
