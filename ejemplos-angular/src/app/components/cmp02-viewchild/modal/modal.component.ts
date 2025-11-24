import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  private hidden: boolean = true

  get isHidden() {
    return this.hidden
  }

  mostrar() {
    this.hidden = false
  }

  ocultar() {
    this.hidden = true
  }

}
