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

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { LibraryComponent } from './library/library.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'', redirectTo: '/', pathMatch:'full'},
  {path:'home', redirectTo: '/', pathMatch:'full'},
  {path:'contact', component: ContactFormComponent},
  {path:'library', component: LibraryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    ContactFormComponent,
    FooterComponent,
    RangeSliderComponent,
    LibraryComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {useHash:true}),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
