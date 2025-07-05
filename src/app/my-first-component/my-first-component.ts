import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//metapodaci za rad ove komponente koju dekorise
@Component({
  selector: 'MyFirstComponent', //naziv html taga
  imports: [CommonModule],
  templateUrl: './my-first-component.html',
  styleUrl: './my-first-component.css',
})
//logika moje komponente
export class MyFirstComponent {
  //props - moze ih html koristiti za prikaz
  message: string = 'Hello world!';
  count: number = 0;
  display: boolean = true;

  increment() {
    this.count++;
  }

  changeDisplay() {
    this.display = !this.display;
  }
}
