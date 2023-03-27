import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Champion {
  name: string;
  lane: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private readonly championsUrl = 'assets/champions.json';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championsUrl);
  }
}
