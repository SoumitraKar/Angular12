import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliding-side-bar',
  templateUrl: './sliding-side-bar.component.html',
  styleUrls: ['./sliding-side-bar.component.scss']
})
export class SlidingSideBarComponent implements OnInit {

  @Input('pageName') pageName:string= "";
  constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
    console.log(this.pageName);
  }
  public show_left = false;
  show_hide_left() {
    
    this.show_left = !this.show_left;
  }
  navigate (page:string) {
    this.router.navigate([page]);
    this.show_left = false;
  }
}
