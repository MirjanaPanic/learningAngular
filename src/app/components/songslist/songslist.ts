import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SongsService } from '../../services/songs';
import { Song } from '../../models/song';
import { SongThumb } from '../song-thumb/song-thumb';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-songslist',
  imports: [CommonModule, SongThumb],
  templateUrl: './songslist.html',
  styleUrl: './songslist.css',
})
export class SongsComponent {
  song$: Observable<Song[]> = of([]);

  constructor(private songsService: SongsService) {} //instanca servisa

  //lifecycle hook - inicijalizacija logike komponente
  //poziva se samo prvi put ili kad se komponenta unisti pa se opet mountuje!
  //ne reaguje na promene inputa ili u servisu!!
  ngOnInit(): void {
    this.song$ = this.songsService.getAll();
  }
}
