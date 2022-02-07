import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent-base',
  templateUrl: './parent-base.component.html',
  styleUrls: ['./parent-base.component.css'],
})
export class ParentBaseComponent implements OnInit {
  constructor() {}
  valueChild = new FormControl();

  ngOnInit(): void {}

  setItem(param: string) {
    this.valueChild.setValue(param);
  }
}
