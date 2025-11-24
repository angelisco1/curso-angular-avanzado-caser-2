import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent {
  @Input() titulo: string = ''
  acordeonAbierto: boolean = true



  toggleContenido() {
    this.acordeonAbierto = !this.acordeonAbierto
  }

}
