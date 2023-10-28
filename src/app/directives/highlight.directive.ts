import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

// .cssclass
// #id
// <elementname/>
// [attribute]

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  
  @Input('highlight') color!: string;

  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  @HostListener('mouseover') mouseover() {
    console.log(this.color);

    this._renderer.setStyle(
      this._el.nativeElement,
      'background-color',
      this.color !== '' ? this.color : 'yellow'
    );
  }

  @HostListener('mouseout') mouseout() {
    this._renderer.removeStyle(this._el.nativeElement, 'background-color');
  }
}
