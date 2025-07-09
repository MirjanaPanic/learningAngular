import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Song } from '../models/song';
import { Observable } from 'rxjs';

//koristi Dependency Injection mehanizam

@Injectable({
  providedIn: 'root', //bice dostupan servis svuda u aplikaciji
})
export class SongsService {
  //ne kreiram prop, vec mi sam mehanizam DI injectuje instancu HttpClient :)
  constructor(private httpClient: HttpClient) {} //this.httpClient

  getAll(): Observable<Song[]> {
    return this.httpClient.get<Song[]>(environment.api + '/songs');
  }
}
