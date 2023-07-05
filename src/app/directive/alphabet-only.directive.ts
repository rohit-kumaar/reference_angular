import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
})
export class AlphabetOnlyDirective {
  regexStr = '^[a-zA-Z]$';

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
