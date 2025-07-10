import { Component, Input } from '@angular/core';
import { Song } from '../../models/song';

@Component({
  selector: 'app-song-thumb',
  imports: [],
  templateUrl: './song-thumb.html',
  styleUrl: './song-thumb.css',
})
export class SongThumb {
  //prop u [] je input, ono sto roditelj prosledjuje detetu
  //prop u () je output
  @Input() song: Song = {
    id: 20,
    title: 'lala',
    artist: 'mika',
    viewsCount: 20000,
    link: 'dmcwc',
  };
}
