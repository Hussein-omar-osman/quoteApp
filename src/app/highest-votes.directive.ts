import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighestVotes]',
})
export class HighestVotesDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set appHighestVotes(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.element.nativeElement, 'highest');
    } else {
      this.renderer.addClass(this.element.nativeElement, 'card');
    }
  }
}
