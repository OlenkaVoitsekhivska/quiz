import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  effect,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private ref: ElementRef, private renderer: Renderer2) {
    // effect(() => {
    //   console.log(`Should highlight: ${this.figureItOut()}`);
    // });
  }
}
