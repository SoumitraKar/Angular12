import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { SlidingSideBarComponent } from './components/common/sliding-side-bar/sliding-side-bar.component';
import { BasicsComponent } from './components/pages/basics/basics.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { BlockedPageComponent } from './components/pages/blocked-page/blocked-page.component';

import { BasicInterceptorInterceptor } from './services/basic-interceptor.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { CustomValueDirective } from './directives/custom-value.directive';
import { ObjectComponentComponent } from './components/object-component/object-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SlidingSideBarComponent,
    BasicsComponent,
    ServicePageComponent,
    PipesComponent,
    CustomPipePipe,
    BlockedPageComponent,
    CustomStyleDirective,
    CustomValueDirective,
    ObjectComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
