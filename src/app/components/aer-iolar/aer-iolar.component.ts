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
  slider: any;
  defaultTransform: any;

  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
  }
  goNext() {
    this.defaultTransform = this.defaultTransform - 310;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.05) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
  goPrev() {
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 310;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }
}
