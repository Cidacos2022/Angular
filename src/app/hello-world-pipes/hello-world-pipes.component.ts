import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world-pipes',
  templateUrl: './hello-world-pipes.component.html',
  styleUrls: ['./hello-world-pipes.component.css']
})
export class HelloWorldPipesComponent  {
  cumpleanos= new Date(2000,10,10);
}
