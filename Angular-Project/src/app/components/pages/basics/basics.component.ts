import { Component, OnInit } from '@angular/core';
import { Global } from '../../../global';
import { ObjectComponentComponent } from '../../object-component/object-component.component';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  value:string = "";
  valueGet:string = "";
  constructor(private global:Global, private objectComponentComponent:ObjectComponentComponent) {
    let personObjectLiteralWay1:any;
    let personObjectLiteralWay2:any;
    personObjectLiteralWay1 = this.objectComponentComponent.personObjectLiteralWay("Soumitra", "Kar")
    personObjectLiteralWay2 = this.objectComponentComponent.personObjectLiteralWay("Bhinsu", "Dash")
    console.log(personObjectLiteralWay1.getFullName());
    console.log(personObjectLiteralWay2.getFullName());
    
    //Create Object End
  }

  ngOnInit(): void {
    this.global.getValue().subscribe(data => {
      this.valueGet = data;
    })
  }
  setValue() {
    this.global.setValue(this.value)
  }

}
