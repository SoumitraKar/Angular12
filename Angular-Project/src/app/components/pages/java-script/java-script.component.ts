import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.scss']
})
export class JavaScriptComponent implements OnInit {
  mapArray:any = [];
  filterArray:any = [];
  name:string = "";
  name1:any; name2:any;
  constructor() {
    this.name1 = this.checkClosure("Soumitra")
    this.name2 = this.checkClosure("Bhinsu")
  }

  ngOnInit(): void {
    let arrayObj = [
      {"name" : "SOUMITRA", "age": 29},
      {"name" : "Bhinsu", "age": 27}
    ];
    this.mapArray = arrayObj.map(person => {
      let changedPerson = {"name" : person.name}
      return changedPerson;
    })
    //mapArray =[{"name": "SOUMITRA"},{"name": "Bhinsu"}]
    
    this.filterArray = arrayObj.filter(person => {
      if(person.age > 27) {
        return true;
      }
      return false;
    });
    //filterArray = [{"name": "SOUMITRA","age": 29}]
    
    
  }

  checkClosure(name:string) { // CLOSURE
    let that = this;
    function changeVal(lastName:string) {
      that.name = name + " " + lastName;
    }
    return changeVal;
  }



}
