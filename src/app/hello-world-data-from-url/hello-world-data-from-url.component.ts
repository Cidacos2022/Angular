import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-world-data-from-url',
  templateUrl: './hello-world-data-from-url.component.html',
  styleUrls: ['./hello-world-data-from-url.component.css'],
})
export class HelloWorldDataFromUrlComponent implements OnInit {
  urlData = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parameters: any) => {
      this.urlData = parameters.get('data'); //+ string to number
    });
  }
}
