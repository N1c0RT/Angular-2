import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CicloForComponent } from './Components/ciclo-for/ciclo-for.component';
import { DropDownComponent } from './Components/drop-down/drop-down.component';
import { TabellaPComponent } from './Components/tabella-p/tabella-p.component';
import { ProfiloSwitchComponent } from './Components/profilo-switch/profilo-switch.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProdDetailsComponent } from './Components/prod-details/prod-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CicloForComponent, DropDownComponent, TabellaPComponent, ProfiloSwitchComponent, HomepageComponent, ProdDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-2';
}
