import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { SuscripcionesService } from './services/suscripciones.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos-angular-pwa';

  constructor(
    private swPush: SwPush,
    private suscripcionesService: SuscripcionesService,
  ) {
    this.pedirPermisoNotificaciones()
  }

  private pedirPermisoNotificaciones() {
    this.swPush.requestSubscription({
      serverPublicKey: 'BMrb36YmzsvmEZtpNw6ws6gg6TN0lrR4LYh-FR2QTS_yGZbOTGOPVVChIC18Ic9YEZZkpIrrDfkJkl-btwQdu4Q'
    })
      .then((suscripcion: PushSubscription) => {
        console.log(suscripcion)

        this.suscripcionesService.guardarSuscripcion(suscripcion)
          .subscribe({
            next: () => {
              console.log('Te has suscrito a las notificaciones')
            },
            error: (err) => {
              console.log(err)
            }
          })
      })
  }


}
