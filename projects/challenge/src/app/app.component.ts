import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Gentleman } from './interfaces/gentleman';
import { getGentlemenData } from './services/service.service';
// import { Gentleman } from './interfaces/gentleman';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'challenge';
  gentlemans: Gentleman[]; // gentleman es de tipo array de gentleman y ahora mismo = []
  constructor() {
    this.gentlemans = getGentlemenData();
  }
}
