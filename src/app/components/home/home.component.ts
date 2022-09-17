import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  block: any = document.getElementById("block");
  character: any = document.getElementById("character");
  public timerInterval:any;

  constructor() { 
  }

  ngOnInit( ): void {
    this.timerInterval = setInterval(this.checkDead, 10);
  }
  jump(){
   const character: any = document.getElementById("character");
    this.animateBlock();
    if(character.classList == "animate"){return;}
    character.classList.add("animate");
    setTimeout(this.removeJump,300); 
  };
  animateBlock() {
    const block = document.getElementById("block")!;
    block.classList.add("animate-block");
    const game = document.getElementById("gameOver")!;
    game.style.visibility = "hidden";
  }
  removeJump(){
    const character = document.getElementById("character")!;
    character.classList.remove("animate");
  }
  
  checkDead(){
    let characterTop = parseInt(window.getComputedStyle(this.character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(this.block).getPropertyValue("left"));
  
    if(blockLeft<10 && blockLeft>-10 && characterTop>=180){
      const block = document.getElementById("block")!;
      const game = document.getElementById("gameOver")!;
      block.classList.remove("animate-block");
      game.style.visibility = "visible";
    } 
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }
}
