import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from "./modal/modal.component";

@Component({
  selector: 'app-cmp02-viewchild',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './cmp02-viewchild.component.html',
  styleUrl: './cmp02-viewchild.component.css'
})
export class Cmp02ViewchildComponent {
  @ViewChild(ModalComponent) modalCmp!: ModalComponent

  // ngAfterViewInit() {
  //   console.log(this.modalCmp.isHidden)
  // }

  mostrarModal() {
    this.modalCmp.mostrar()
  }

}
