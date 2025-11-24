import { Component, ComponentRef, ViewChild } from '@angular/core';
import { Recurso } from './recurso.interface';
import { ModalComponent } from "../cmp02-viewchild/modal/modal.component";
import { HostDirective } from './host.directive';
import { CmpImagenComponent } from './cmp-imagen/cmp-imagen.component';
import { CmpAudioComponent } from './cmp-audio/cmp-audio.component';

@Component({
  selector: 'app-cmp03-componentes-dinamicos',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './cmp03-componentes-dinamicos.component.html',
  styleUrl: './cmp03-componentes-dinamicos.component.css'
})
export class Cmp03ComponentesDinamicosComponent {
  @ViewChild(HostDirective) host!: HostDirective

  listaArchivos: Array<Recurso> = [
    { id: 1, nombre: 'Logo de Angular', src: 'images/imagen1.png', tipo: 'image' },
    { id: 2, nombre: 'Logo de React', src: 'images/imagen2.png', tipo: 'image' },
    { id: 3, nombre: 'Canción', src: 'audios/audio.mp3', tipo: 'audio' },
  ]

  verRecurso(recurso: Recurso) {
    console.log(recurso)

    const vcr = this.host.viewContainerRef

    const tipoComponente = recurso.tipo === 'image' ? CmpImagenComponent : CmpAudioComponent
    const componente: ComponentRef<CmpImagenComponent | CmpAudioComponent> = vcr.createComponent(tipoComponente)

    componente.instance.recursoSrc = recurso.src


  }

}
