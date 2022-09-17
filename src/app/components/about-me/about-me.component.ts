import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  random: any;
  choice: any;
  chosenPic: any;
  cat: boolean = false;
  tank: boolean = false;
  hedgehog: boolean = false;
  erasmus: boolean = false;
  malta: boolean = false;
  translation: boolean = false;
  facts = ["Me encantan los erizos", "Tengo un gato", "Estudié traducción en Sevilla", "Me gusta War Thunder", "La foto de arriba es de Malta", "Hice un Erasmus en Dublín"];
  showFact: boolean = false;
  pics = ["cat-laptop.gif", "hola", "erizo.gif"];
  constructor(private sanitizer:DomSanitizer) {
    
  }
  ngOnInit() {
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
    this.cat = false;
    this.hedgehog = false;
    this.tank = false;
    this.erasmus = false;
    this.malta = false;
    this.translation = false;
    this.showFact = true;
    const pic = document.getElementById("buttonPic")!;

    this.random = Math.floor(Math.random() * this.facts.length);
    this.choice = [this.facts[this.random]]

    if(this.random == 0 ) {
      this.hedgehog = true;
      pic.classList.add("slidingIn");
      this.chosenPic = this.pics[2];

      console.log('erizo powerrrr')
    } else if(this.random == 1) {
      this.cat = true;
      pic.classList.add("slidingIn");

      this.chosenPic = this.pics[0];
    pic.classList.add("slidingIn");
    } else if(this.random == 2) {
      this.translation = true;
      this.chosenPic = this.pics[1];
      console.log('translation!')
    } else if(this.random == 3) {
      this.tank = true;
      console.log('TANK')
    } else if(this.random == 4) {
      this.malta = true;
      console.log('malta')
    } else if(this.random == 5) {
      this.erasmus = true;
      console.log('erasmus')
    }
  }
  
   
}
