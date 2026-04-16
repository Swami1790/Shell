import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Autofocus Directive
 * Automatically focuses an input element when it's rendered in the DOM.
 */
@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.focus();
  }
}
