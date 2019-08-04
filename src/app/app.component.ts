import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Birthday calculator';
  currentAge: number = 0;
  getBirthYear(age: number){
    this.currentAge = new Date().getFullYear() - age;
  }
}
