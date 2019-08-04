import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChild('inputElement', {static: true}) inputElement: ElementRef;
  @Output() birthYear:EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onSubmitBirthYear(){
    const value = this.inputElement.nativeElement.value;
    this.birthYear.emit(value);
  }


}
