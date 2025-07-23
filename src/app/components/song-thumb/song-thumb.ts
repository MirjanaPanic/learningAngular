import { Component, Input } from '@angular/core';
import { Song } from '../../models/song';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song-thumb',
  imports: [CommonModule], //za *ngIf
  templateUrl: './song-thumb.html',
  styleUrl: './song-thumb.css',
})
export class SongThumb {
  //prop u [] je input, ono sto roditelj prosledjuje detetu
  //prop u () je output
  @Input() song: Song | null = null;
}
