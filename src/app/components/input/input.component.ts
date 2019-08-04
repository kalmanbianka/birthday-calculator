import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChild('inputElement', {static: true}) inputElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  onSubmitBirthYear(){
    console.log(this.inputElement.nativeElement.value);
  }


}
