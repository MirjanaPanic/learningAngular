import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SongsService } from '../../services/songs';
import { Song } from '../../models/song';
import { SongThumb } from '../song-thumb/song-thumb';

@Component({
  selector: 'app-songslist',
  imports: [CommonModule, SongThumb],
  templateUrl: './songslist.html',
  styleUrl: './songslist.css',
})
export class SongsComponent {
  songs: Song[] = [];

  constructor(private songsService: SongsService) {} //instanca servisa

  ngOnInit(): void {
    this.songsService.getAll().subscribe((songs) => this.songs=songs);
  }
}
