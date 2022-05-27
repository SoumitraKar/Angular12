import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVE } from '@angular/router';

@Component({
  selector: 'navBar-component',
  templateUrl: './app/components/navBar/navBar.component.html',
  styleUrls: ['./app/components/navBar/navBar.component.css']
})
export class navBarComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  public proj;
  public project = "project1";
  @Input() projects = [];
  projectPageRoute() {
  this.router.navigate(['projectPage', this.project]);
  }
}
