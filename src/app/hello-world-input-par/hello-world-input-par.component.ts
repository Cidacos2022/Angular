import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-input-par',
  templateUrl: './hello-world-input-par.component.html',
  styleUrls: ['./hello-world-input-par.component.css'],
})
export class HelloWorldInputParComponent implements OnInit {
  inputNumber: number;
  resultVisible: boolean;
  isPar: boolean;

  constructor() {
    this.inputNumber = 0;
    this.resultVisible = false;
    this.isPar = false;
  }

  ngOnInit(): void {}

  buttonClick() {
    this.isPar = this.inputNumber % 2 == 0;
    this.resultVisible = true;
  }

  clear() {
    this.resultVisible = false;
    this.inputNumber = 0;
  }
}
