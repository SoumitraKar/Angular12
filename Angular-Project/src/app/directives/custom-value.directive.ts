import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appCustomValue]'
})
export class CustomValueDirective  implements OnInit {
  constructor(private el:ElementRef) {}
  ngOnInit (): void {
    let val = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = "₹" + val + ".00/-";
  }
}
