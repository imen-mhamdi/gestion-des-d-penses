import { Component } from '@angular/core';
import { FirstService } from './services/first.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DMWM-A-2024';
  student; // = "Nidhal";

  traitementDuApp(msg) {
    alert(msg);
  }
}
