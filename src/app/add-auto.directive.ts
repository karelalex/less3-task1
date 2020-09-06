import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAddAuto]'
})
export class AddAutoDirective{

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,

  ) {  }

  @HostListener('keydown.enter', ['$event.target.value']) onEnterPress(value): void {
    const names = JSON.parse(localStorage.getItem('names')) || [];
    names.push(value);
    localStorage.setItem('names', JSON.stringify(names));
  }
}
