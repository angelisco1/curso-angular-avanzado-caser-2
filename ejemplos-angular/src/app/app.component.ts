import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cmp01TransclusionComponent } from "./components/cmp01-transclusion/cmp01-transclusion.component";
import { Cmp02ViewchildComponent } from "./components/cmp02-viewchild/cmp02-viewchild.component";
import { Cmp03ComponentesDinamicosComponent } from "./components/cmp03-componentes-dinamicos/cmp03-componentes-dinamicos.component";
import { Cmp04ComponentesDinamicosRouterComponent } from "./components/cmp04-componentes-dinamicos-router/cmp04-componentes-dinamicos-router.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    Cmp01TransclusionComponent,
    Cmp02ViewchildComponent,
    Cmp03ComponentesDinamicosComponent,
    Cmp04ComponentesDinamicosRouterComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplos-angular';
}
