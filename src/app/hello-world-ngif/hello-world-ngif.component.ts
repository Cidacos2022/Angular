import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html'
})
export class HelloWorldNgIfComponent {
  message = 'I\'m read only!';
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    this.message =  this.canEdit ? 'You can edit me!': 'I\'m read only!';
  }
}

