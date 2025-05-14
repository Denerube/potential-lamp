import {
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appEqualWidth]',
  standalone: true
})
export class EqualWidthDirective {

 private static instances: EqualWidthDirective[] = [];

  constructor(private el: ElementRef) {
    EqualWidthDirective.instances.push(this);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      EqualWidthDirective.applyMaxWidthToAll();
    });
  }

  ngOnDestroy() {
    // Clean up when component is destroyed
    const index = EqualWidthDirective.instances.indexOf(this);
    if (index !== -1) {
      EqualWidthDirective.instances.splice(index, 1);
    }
  }

  private static applyMaxWidthToAll() {
    const widths = this.instances.map((inst) =>
      inst.el.nativeElement.getBoundingClientRect().width
    );

    const maxWidth = Math.max(...widths);

    for (const inst of this.instances) {
      inst.el.nativeElement.style.width = `${maxWidth}px`;
    }
  }

  


}
