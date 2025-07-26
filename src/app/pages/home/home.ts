import { CommonModule } from '@angular/common';
import { Component, input, signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter.actions';
import { CounterComponent } from '../../components/counter/counter';

//metapodaci za rad ove komponente koju dekorise
@Component({
  selector: 'app-home', //naziv html taga
  imports: [CommonModule, CounterComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
//logika moje komponente
export class HomeComponent {
  //props - moze ih html koristiti za prikaz
  //po defaultu su PUBLIC - da bi mogle iz svog html fajla(template-a) da se koriste!
  message: string = 'Hello world!';
  display: boolean = true;
  title: WritableSignal<string> = signal('Prva komponenta');
  receivedMessage = input(); //prima poruku od roditelja

  //count = signal(0);
  
  changeDisplay() {
    this.display = !this.display;
  }
}
