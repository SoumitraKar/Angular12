import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomValue]'
})
export class CustomValueDirective  implements OnInit {

  constructor(private el:ElementRef) { 
    
    // el.nativeElement.innerText = val;
  }
  ngOnInit (): void {
    let val = this.el.nativeElement.innerText;
    console.log(val);
    val = "₹" + val + ".00/-"
    this.el.nativeElement.innerText = val;
  }
}
