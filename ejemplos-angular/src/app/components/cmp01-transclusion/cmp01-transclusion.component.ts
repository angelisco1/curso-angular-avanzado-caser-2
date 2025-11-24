import { Component } from '@angular/core';
import { AcordeonComponent } from "./acordeon/acordeon.component";

@Component({
  selector: 'app-cmp01-transclusion',
  standalone: true,
  imports: [AcordeonComponent],
  templateUrl: './cmp01-transclusion.component.html',
  styleUrl: './cmp01-transclusion.component.css'
})
export class Cmp01TransclusionComponent {

}
