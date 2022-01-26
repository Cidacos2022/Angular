import { Component } from '@angular/core';

@Component ({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html'
})
export class HelloWorldBindingsComponent {
  fontColor = 'blue';
  sayHelloId = 1;
  isDisabled = false;
  message = 'Aupa chavalaes';

  sayMessage() {
    alert(this.message);
  }

}
