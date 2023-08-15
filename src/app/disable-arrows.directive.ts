import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisableArrows]'
})
export class DisableArrowsDirective {
  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
    }
  }
}
