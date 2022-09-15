import { Component, OnInit } from '@angular/core';
import { faHtml5, faCss3, faJs, faAngular, faLaravel, faGit, faPhp, faGithub, faFigma,faDrupal, faBootstrap, faSass, faNpm } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  html = faHtml5;
  css = faCss3; 
  js = faJs;
  angular = faAngular;
  laravel = faLaravel;
  git = faGit;
  php = faPhp;
  gh = faGithub;
  figma = faFigma;
  dp = faDrupal;
  bt = faBootstrap;
  sass = faSass;
  npm = faNpm;
  constructor() { }

  ngOnInit(): void {
  }

}
