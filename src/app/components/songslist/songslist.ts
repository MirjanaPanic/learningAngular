import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SongsService } from '../../services/songs';
import { Song } from '../../models/song';

@Component({
  selector: 'app-songslist',
  imports: [CommonModule],
  templateUrl: './songslist.html',
  styleUrl: './songslist.css',
})
export class SongslistComponent {
  songs: Song[] = [];

  constructor(private songsService: SongsService) {} //instanca servisa

  ngOnInit(): void {
    this.songsService.getAll().subscribe((songs) => this.songs=songs);
  }
}
