import { Component, HostListener, OnInit } from '@angular/core';
import { faHtml5, faCss3, faJs, faAngular, faLaravel, faGit, faPhp, faGithub, faFigma,faDrupal, faBootstrap, faSass, faNpm } from '@fortawesome/free-brands-svg-icons';


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
  public currentWindowWidth: any ;

  random: any;
  choice: any;
  chosenPic: any;
  facts = ["Me encantan los erizos", "Tengo un gato", "Estudié traducción en Sevilla", "Me gusta War Thunder", "Estoy aprendiendo a usar GIMP", "Hice un Erasmus en Dublín"];
  showFact: boolean = false;
  factsImages: any = {
    0: ['erizo.gif'],
    1: ['cat.gif'],
    2: ['translation.png'],
    3: ['tank.gif'],
    4: ['yo.png'],
    5: ['irish.gif'],
  };   
  constructor() {
    
  }
  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;

  }
  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
  }
  stop() {
    const emoji: any = document.getElementById("code-block");
    emoji.classList.add("code-block-none");
  }
  continue() {
    const emoji: any = document.getElementById("code-block");
    emoji.classList.remove("code-block-none");
    emoji.classList.add("code-block");
  }
  generateFact() {
        
     this.showFact = true;
     this.random = Math.floor(Math.random() * this.facts.length);
    this.choice = [this.facts[this.random]]

    if(this.factsImages[this.random]) {
      this.chosenPic = this.factsImages[this.random];
  
    } 


  }
  
   
} 