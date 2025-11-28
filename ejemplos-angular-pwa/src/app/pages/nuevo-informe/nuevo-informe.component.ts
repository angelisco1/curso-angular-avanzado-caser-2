import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { InformesService } from '../../services/informes.service';
import { Router } from '@angular/router';

declare var Swal: any

@Component({
  selector: 'app-nuevo-informe',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './nuevo-informe.component.html',
  styleUrl: './nuevo-informe.component.css'
})
export class NuevoInformeComponent {
  form: FormGroup

  constructor(
    private informesService: InformesService,
    private router: Router
  ) {

    this.form = new FormGroup({
      titulo: new FormControl('Un título', Validators.required),
      contenido: new FormControl('El contenido del informe', Validators.required),
    })

  }


  guardar() {
    const nuevoInforme = this.form.value

    this.informesService.createInforme(nuevoInforme)
      .subscribe((datos: any) => {
        console.log(datos)

        Swal.fire({
          title: 'Success!',
          text: 'Se ha creado el informe correctamente.',
          icon: 'success',
          confirmButtonText: 'Ir a inicio'
        })
          .then(() => {
            this.router.navigateByUrl('/')
          })
      })

    // this.informesService.createInforme(nuevoInforme)
    //   .subscribe({
    //     next: (datos: any) => {
    //       console.log(datos)
    //       mostrarModal()
    //         .then(() => {
    //           this.router.navigateByUrl('/')
    //         })
    //     },
    //     error: (err: any) => {
    //       mostrarModalError()
    //         .then(() => {

    //         })
    //     },
    //     complete: () => {

    //     }
    //   })
  }


}
