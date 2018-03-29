import {Directive, ElementRef, Attribute} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    'selector': '[demo-attr]'
})
export class DemoAttrDirective {
    // constructor(element: ElementRef, @Attribute('demo-attr-class') demodirClass: string) {
    //    element.nativeElement.classList.add(demodirClass || 'bg-success');
    //     console.log('element', element);
    //     console.log('element.nativeElement', element.nativeElement);
    // }

    constructor(element: ElementRef, @Attribute('demo-attr') demodirClass: string) {
        element.nativeElement.classList.add(demodirClass || 'bg-success');
         console.log('element', element);
         console.log('element.nativeElement', element.nativeElement);
     }
}
