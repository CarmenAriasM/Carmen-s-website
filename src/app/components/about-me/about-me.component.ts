import { Component, OnInit } from '@angular/core';
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
  facts = ["Me encantan los erizos", "Tengo un gato", "Estudié traducción en Sevilla", "Me gusta War Thunder", "La foto de arriba es de Malta", "Hice un Erasmus en Dublín"];
  showFact: boolean = false;
  factsImages: any = {
    0: ['erizo.gif'],
    1: ['cat.gif'],
    2: ['translation'],
    3: ['tank.gif'],
    4: ['malta'],
    5: ['irish.gif'],
  };   
  constructor() {
    
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
        
     this.showFact = true;
     this.random = Math.floor(Math.random() * this.facts.length);
    this.choice = [this.facts[this.random]]

    if(this.factsImages[this.random]) {
      this.chosenPic = this.factsImages[this.random];
  
    } 


  }
  
   
} /*  this.showFact = true;
    this.random = Math.floor(Math.random() * this.facts.length);
    this.choice = [this.facts[this.random]]

    if(this.factsImages[this.random]) {
      this.chosenPic = this.factsImages[this.random];
  
    }



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
    } */