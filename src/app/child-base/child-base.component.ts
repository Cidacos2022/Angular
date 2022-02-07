import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-base',
  templateUrl: './child-base.component.html',
  styleUrls: ['./child-base.component.css'],
})
export class ChildBaseComponent implements OnInit {
  valueChildInput = new FormControl();
  constructor() {}

  @Output() eventoClickButton = new EventEmitter<string>();

  clickMe(param: string) {
    this.eventoClickButton.emit(param);
  }

  ngOnInit(): void {}
}
