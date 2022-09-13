import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  block: any = document.getElementById("block");
  constructor() { }

  ngOnInit(): void {
    setInterval(this.checkDead, 10);
  }
  jump(){
   const character: any = document.getElementById("character");
    this.animateBlock();
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(this.removeJump,300); 
  };
  animateBlock() {
    const block: any = document.getElementById("block");
    block.classList.add("animate-block");
    const game: any = document.getElementById("gameOver");
    game.style.visibility = "hidden";
  }
  removeJump(){
    const character: any = document.getElementById("character");
    character.classList.remove("animate");
  }
  
  checkDead(){
    const character = document.getElementById("character")!;
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(this.block).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
      const block: any = document.getElementById("block");
      const game: any = document.getElementById("gameOver");
      block.classList.remove("animate-block");
      game.style.visibility = "visible";
    } 
  }

}
