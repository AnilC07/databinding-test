import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
@Output() newItemEvent = new EventEmitter<string>();

addNewItem(value: string) {
  this.newItemEvent.emit(value); // Utilise la methode emit de l'api
}
}
