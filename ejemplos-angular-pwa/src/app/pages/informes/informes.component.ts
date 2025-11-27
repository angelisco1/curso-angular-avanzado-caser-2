import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { InformesService } from '../../services/informes.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './informes.component.html',
  styleUrl: './informes.component.css'
})
export class InformesComponent {
  informes$: Observable<any> = of([])

  constructor(
    private informesService: InformesService,
  ) {}

  ngOnInit() {
    this.informes$ = this.informesService.getInformes()
  }

}
