import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabella-p',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella-p.component.html',
  styleUrl: './tabella-p.component.css'
})
export class TabellaPComponent {
   
  prodotti = [
    {prodotto: "coca cola", prezzo: "2 euro"},
    {prodotto: "pasta", prezzo: "5 euro"},
    {prodotto: "latte", prezzo: "3 euro"},
    {prodotto: "carne", prezzo: "4 euro"},
    {prodotto: "acqua", prezzo: "1 euro"},
  ]
}
