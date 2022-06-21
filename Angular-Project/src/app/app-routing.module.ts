import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './components/pages/basics/basics.component';
import { ServicePageComponent } from './components/pages/service-page/service-page.component';
import { PipesComponent } from './components/pages/pipes/pipes.component';
import { BlockedPageComponent } from './components/pages/blocked-page/blocked-page.component';
import { RoutingComponent } from './components/pages/routing/routing.component';
import { AuthGuard } from './auth.guard';
import { JavaScriptComponent } from './components/pages/java-script/java-script.component';


const routes: Routes = [
  { path: 'basics', component: BasicsComponent, data: { url: '', workNumData: '' }},
  { path: 'javascript', component: JavaScriptComponent, data: { url: '', workNumData: '' }},
  { path: 'services', component: ServicePageComponent, data: { url: '', workNumData: '' }},
  { path: 'pipes', component: PipesComponent, data: { url: '', workNumData: '' }},
  { path: 'routing', component: RoutingComponent, data: { url: '', workNumData: '' }},
  { path: 'blocked', component: BlockedPageComponent, canActivate:[AuthGuard], data: { url: '', workNumData: '' }},
  { path: '**', redirectTo: 'basics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
