import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css'
})
export class ProdDetailsComponent {

  @Input() prodotto! : {nome: string, prezzo: string}

  @Output() messaggioInviato: EventEmitter<string> = new EventEmitter<string>(); //l'ultima parte si scrive sempre così apparte il tipo 

  invioMessaggio(){
    const messaggio = 'Ciao mamma guarda come mi diverto';
    this.messaggioInviato.emit(messaggio);
  }
}
