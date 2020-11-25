import { Directive, Input, AfterContentInit, ElementRef, NgZone } from '@angular/core';
import SimpleBar from 'simplebar';

@Directive({
  selector: '[uniScrollbar],uni-scrollbar',
  host: {
    class: 'uni-scrollbar'
  }
})
export class ScrollbarDirective implements AfterContentInit {

  @Input('uniScrollbar') options: Partial<any>;

  scrollbarRef: SimpleBar;
  
  constructor(private _element: ElementRef,
    private zone: NgZone) {

      console.log('ScrollbarDirective')
  }

  ngAfterContentInit() {
    console.log('ScrollbarDirective --> ngAfterContentInit')
    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new SimpleBar(this._element.nativeElement, this.options);
    });
  }

}
