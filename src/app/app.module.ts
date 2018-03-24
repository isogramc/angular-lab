import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';

import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { FooterComponent } from './footer/footer.component';

import { Routes, RouterModule, Router } from "@angular/router";

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch:'full'},
  {path:'home', redirectTo: '/', pathMatch:'full'},
  {path:'about', component: CarouselComponent},
  {path:'contact', component: ContactFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    ContactFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
