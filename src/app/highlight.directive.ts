import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {}
  @Input() defaultColor: string;
  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight (this.highlightColor || this.defaultColor || 'yellow');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight (null);
  }
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
