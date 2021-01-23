import { ViewChild, Component } from '@angular/core';
import { AccordionPanelComponent } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ammo-converter-fallout';
  @ViewChild('p1') p1: AccordionPanelComponent;
  @ViewChild('p2') p2: AccordionPanelComponent;
  isP1Open: boolean = false;
  isP2Open: boolean = true;

  open(panelNum) {
    const panel = this[`p${panelNum}`];
    panel.isOpen = !panel.isOpen;
  }
}
