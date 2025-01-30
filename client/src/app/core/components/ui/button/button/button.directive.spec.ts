import { ElementRef, Renderer2 } from '@angular/core';
import { ButtonDirective } from './button.directive';

describe('ButtonDirective', () => {
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('button'));
    rendererMock = jasmine.createSpyObj('Renderer2', ['setAttribute']);
  });

  it('should create an instance', () => {
    const directive = new ButtonDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
