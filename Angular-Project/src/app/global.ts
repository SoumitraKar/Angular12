import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Global {
    public publicVariable = ""; // color blind toggle
    private privateVariable = new Subject<any>();

  setValue(val: string) {
    this.privateVariable.next(val);
    this.publicVariable = val;
  }
  getValue(): Observable<any> {
    return this.privateVariable.asObservable();
  }

}