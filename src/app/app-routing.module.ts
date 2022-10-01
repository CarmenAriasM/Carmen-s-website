import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AerIolarComponent } from './components/aer-iolar/aer-iolar.component';
import { CasaPapelComponent } from './components/casa-papel/casa-papel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FestivalComponent } from './components/festival/festival.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-mi', component: AboutMeComponent }, 
  { path: 'proyectos', component: ProjectsComponent }, 
  { path: 'proyectos/aer-iolar', component: AerIolarComponent }, 
  { path: 'proyectos/festival', component: FestivalComponent }, 
  { path: 'proyectos/casa-papel', component: CasaPapelComponent }, 
  { path: 'contacto', component: ContactComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
