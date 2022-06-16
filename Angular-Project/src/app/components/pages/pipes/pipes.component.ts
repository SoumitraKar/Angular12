import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  today = new Date;
  n1 = 34;
  n2 = 4.5;
  n3 = 1234567.1234567
  n4 = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
