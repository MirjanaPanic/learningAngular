import { Component } from '@angular/core';
import { MyFirstComponent } from '../my-first-component/my-first-component';

@Component({
  selector: 'app-header',
  imports: [MyFirstComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
