import { Component } from '@angular/core';
import { CicloForComponent } from "../../Components/ciclo-for/ciclo-for.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdDetailsComponent } from '../../Components/prod-details/prod-details.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CicloForComponent, CommonModule, FormsModule, ProdDetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  messaggio: string = "Ciao dal padre"

  prodottoSelezionato = {
    nome: "",
    prezzo: "",
  };

  prodotti = [
    {nome: "coca cola", prezzo: 2 },
    {nome: "pasta", prezzo: 3 },
    {nome: "latte", prezzo: 3 },
    {nome: "carne", prezzo: 4 },
    {nome: "acqua", prezzo: 1 },
  ];

  selectProduct(prodotto: any) {
    this.prodottoSelezionato = prodotto
  }

  //Creo la variabile che riceverà il messaggio
  messaggioRicevuto = "";

  riceviMex(messaggio: string){
    this.messaggioRicevuto = messaggio;
  }
}
