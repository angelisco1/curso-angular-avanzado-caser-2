import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-audio',
  standalone: true,
  imports: [],
  templateUrl: './cmp-audio.component.html',
  styleUrl: './cmp-audio.component.css'
})
export class CmpAudioComponent {
  @Input() recursoSrc: string = ''

}
