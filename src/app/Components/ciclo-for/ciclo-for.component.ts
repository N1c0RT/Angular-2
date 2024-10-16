import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPersone } from '../../models/persone';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-ciclo-for',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './ciclo-for.component.html',
  styleUrl: './ciclo-for.component.css'
})

export class CicloForComponent {

  @Input() datoDalParent: string = " ";

  fruits: string[] = ['mela','pera','banana','mango']

  persone: IPersone[] = [
    {nome: "Giovanni", eta: 16},
    {nome: "Marco", eta: 20},
    {nome: "Luca", eta: 13},
    {nome: "Martha", eta: 18},
    {nome: "Serena", eta: 22},
  ];
}
