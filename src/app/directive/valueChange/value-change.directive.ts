import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValueChange]',
})
export class ValueChangeDirective {
  @Input('appValueChange') newValue: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.value = this.newValue;
  }
}
