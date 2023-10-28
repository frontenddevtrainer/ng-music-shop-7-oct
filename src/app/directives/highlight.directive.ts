import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[msHighlight]',
})
export class HighlightDirective {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  @HostListener('mouseover') mouseover() {
    this._renderer.setStyle(this._el.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseout') mouseout() {
    this._renderer.removeStyle(this._el.nativeElement, 'background-color');
  }
}
