import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { SlidingSideBarComponent } from './components/common/sliding-side-bar/sliding-side-bar.component';
import { BasicsComponent } from './components/pages/basics/basics.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlidingSideBarComponent,
    BasicsComponent,
    ServicePageComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
