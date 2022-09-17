import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carmen-website';
  faSun = faSun;
  faMoon = faMoon;
  isDarkEnable = false;
  presentTheme$ = new BehaviorSubject<string>('theme-light');

  constructor() {}
  
  ngOnInit() {
    /* const btn: any = document.querySelector(".nav-toggle");
    const menu: any = document.querySelector(".mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    }); */
    const navToggle: any = document.querySelector('.nav-toggle')
    const bars: any = document.querySelectorAll('.bar')
    const menu: any = document.querySelector(".mobile-menu");
    navToggle.addEventListener('click', () => {
      bars.forEach((bar: { classList: { toggle: (arg0: string) => any; }; }) => bar.classList.toggle('x'))
      menu.classList.toggle("hidden");
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }
    
    
  }
  changeTheme() {
    this.presentTheme$.value === 'theme-dark'
      ? this.presentTheme$.next('theme-light')
      : this.presentTheme$.next('theme-dark');
    localStorage.setItem('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }

}
