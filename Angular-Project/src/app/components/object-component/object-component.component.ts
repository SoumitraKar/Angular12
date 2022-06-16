import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { personInterface } from '../../interface/customInterface';

@Component({
  selector: 'app-object-component',
  templateUrl: './object-component.component.html',
  styleUrls: ['./object-component.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ObjectComponentComponent implements OnInit {
  name:string = "";
  age:number = 0;
  print:any;
  constructor() {

  }

  ngOnInit(): void {
  }
  personObjectLiteralWay(firstName:string, lastName:string):any {
    let newObj:personInterface 
    newObj =  {
      "firstName" : firstName,
      "lastName" : lastName,
      "getFullName" : function () {return (`${this.firstName} ${this.lastName}`)}
    }
    return newObj;
  }

  // personInterface(name:string, age:number):any {
  //   this.name = name;
  //   this.age = age;
  //   this.print = function() {
  //     return this.age
  //   }
  // }
}
