/* tslint:disable use-output-property-decorator directive-class-suffix */
// #docplaster
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({selector: '[myClick]'})
export class ClickDirective {
  // #docregion output-myClick
  @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(별칭) 프로퍼티_이름 = ...
 // #enddocregion output-myClick

  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click!' : '');
      });
  }
}

// #docregion output-myClick2
@Directive({
  // #enddocregion output-myClick2
  selector: '[myClick2]',
  // #docregion output-myClick2
  outputs: ['clicks:myClick']  // 프로퍼티_이름:별칭
})
// #enddocregion output-myClick2
export class ClickDirective2 {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click2!' : '');
      });
  }
}
