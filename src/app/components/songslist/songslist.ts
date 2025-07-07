import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-songslist',
  imports: [CommonModule],
  templateUrl: './songslist.html',
  styleUrl: './songslist.css',
})
export class SongslistComponent {
  songs: string[] = ['prva', 'druga', 'treca', 'cetvrta'];
}
