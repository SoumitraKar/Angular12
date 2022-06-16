import { Component, OnInit } from '@angular/core';
import { BasicServiceService } from '../../../services/basic-service.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  apiVal: string = "";
  apiVal2: string = "";

  constructor(private basicServiceService:BasicServiceService) { }
  ngOnInit(): void {
    this.basicServiceService.getAPIval().subscribe((data:any) => {
      this.apiVal = JSON.stringify(data);
    },
    (error: any) => {
      this.apiVal = "";
    });
    this.basicServiceService.getAPIval2().subscribe((data:any) => {
      this.apiVal2 = JSON.stringify(data);
    },
    (error: any) => {
      this.apiVal = "";
    });
  }

}
