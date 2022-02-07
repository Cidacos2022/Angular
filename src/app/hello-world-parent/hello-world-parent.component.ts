import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hello-world-parent',
  templateUrl: './hello-world-parent.component.html',
  styleUrls: ['./hello-world-parent.component.css'],
})
export class HelloWorldParentComponent implements OnInit {
  constructor() {}

  currentItem = new FormControl();
  currentItemEmited = new FormControl();

  setItem(newItem: string) {
    this.currentItemEmited.setValue(newItem);
  }

  ngOnInit(): void {}
}
