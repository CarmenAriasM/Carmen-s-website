import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aer-iolar',
  templateUrl: './aer-iolar.component.html',
  styleUrls: ['./aer-iolar.component.css']
})
export class AerIolarComponent implements OnInit {
  images = [
    "Imagen1", "Imagen2", "Imagen3", "Imagen4", "Imagen5", "Imagen6", "Imagen7", "Imagen8", "Imagen9", "Imagen10", "Imagen11", "Imagen12", "Imagen13", "Imagen14", "Imagen15", "Imagen16", "Imagen17", "Imagen18", "Imagen19", "Imagen20"
  ]
  imagesDesktop = [
    "ImagenDesktop1", "ImagenDesktop2", "ImagenDesktop3", "ImagenDesktop4", "ImagenDesktop5", "ImagenDesktop6", "ImagenDesktop7", "ImagenDesktop8", "ImagenDesktop9", "ImagenDesktop10", "ImagenDesktop11", "ImagenDesktop12", "ImagenDesktop13", "ImagenDesktop14", "ImagenDesktop15", "ImagenDesktop16", "ImagenDesktop17", "ImagenDesktop18", "ImagenDesktop19"
  ]
  slider: any;
  slider1: any;
  defaultTransform: any;

  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.slider1 = document.getElementById("slider1");
    this.defaultTransform=0
  }
   goNext() {
    this.defaultTransform = this.defaultTransform - 176;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 176;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goNext1() {
    this.defaultTransform = this.defaultTransform - 320;
    if (Math.abs(this.defaultTransform) >= this.slider1.scrollWidth / 1.05) this.defaultTransform = 0;
    this.slider1.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev1() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 320;
    this.slider1.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
 
}
