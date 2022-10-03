import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AerIolarComponent } from './components/aer-iolar/aer-iolar.component';
import { FestivalComponent } from './components/festival/festival.component';
import { CasaPapelComponent } from './components/casa-papel/casa-papel.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    AerIolarComponent,
    FestivalComponent,
    CasaPapelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
