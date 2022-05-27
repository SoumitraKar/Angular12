import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navBarComponent }   from './navBar/navBar.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ navBarComponent ],
  bootstrap:    [ navBarComponent ]
})
export class landingPageModule {  }
