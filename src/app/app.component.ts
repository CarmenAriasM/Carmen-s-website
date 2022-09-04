import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    this.presentTheme$.next(savedTheme);
  }
}
changeTheme() {
  this.presentTheme$.value === 'theme-light'
    ? this.presentTheme$.next('theme-dark')
    : this.presentTheme$.next('theme-light');
  localStorage.setItem('theme', this.presentTheme$.value);
  this.isDarkEnable = !this.isDarkEnable;
}
}
