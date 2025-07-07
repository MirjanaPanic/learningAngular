import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//koristi Dependency Injection mehanizam

@Injectable({
  providedIn: 'root', //bice dostupan servis svuda u aplikaciji
})
export class Songs {
  //ne kreiram prop, vec mi sam mehanizam DI injectuje instancu HttpClient :)
  constructor(private httpClient: HttpClient) {}
}
