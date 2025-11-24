import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-imagen',
  standalone: true,
  imports: [],
  templateUrl: './cmp-imagen.component.html',
  styleUrl: './cmp-imagen.component.css'
})
export class CmpImagenComponent {
  @Input() recursoSrc: string = ''

}
