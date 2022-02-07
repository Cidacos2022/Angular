import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hello-world-child',
  templateUrl: './hello-world-child.component.html',
  styleUrls: ['./hello-world-child.component.css'],
})
export class HelloWorldChildComponent implements OnInit {
  @Input() item = '';

  @Output() emitItemEvent = new EventEmitter<string>();

  textValue = new FormControl();

  constructor() {}

  emitValue(value: string) {
    this.emitItemEvent.emit(value);
  }

  ngOnInit(): void {}
}
