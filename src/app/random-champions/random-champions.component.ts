import { Component, OnInit } from '@angular/core';
import { Champion, ChampionsService } from '../champions.service';

interface Player {
  player: number;
  name: string;
  lane: string;
  champion: string;
}

@Component({
  selector: 'app-random-champions',
  templateUrl: './random-champions.component.html',
  styleUrls: ['./random-champions.component.scss']
})
export class RandomChampionsComponent implements OnInit {
  champions: Champion[] = [];
  lanes: string[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];
  team: Player[] = Array(5).fill(null).map((_, i) => ({ player: i + 1, name: '', lane: '', champion: '' }));
  laneSpecific: boolean = true;
  generated: boolean = false;

  showInputForm = true;

  toggleInputForm() {
    this.showInputForm = !this.showInputForm;
  }
  constructor(private championsService: ChampionsService) {}

  ngOnInit(): void {
    this.championsService.getChampions().subscribe(champions => {
      this.champions = champions;
    });
  }

  generateRandomChampions(): void {
    this.generated = false;
    const availableLanes = [...this.lanes];
    let championPool: Champion[] = [];

    for (const player of this.team) {
      // Assign a random lane to the player
      const randomLaneIndex = Math.floor(Math.random() * availableLanes.length);
      player.lane = availableLanes[randomLaneIndex];
      availableLanes.splice(randomLaneIndex, 1);

      // Get the champion pool based on the lane-specific option
      if (this.laneSpecific) {
        championPool = this.champions.filter(champion => champion.lane === player.lane);
      } else if (!championPool.length) { // Only fill the champion pool once
        championPool = [...this.champions]; // Create a copy of the champions array
      }

      // Assign a random champion to the player and remove the selected champion from the pool
      const randomChampionIndex = Math.floor(Math.random() * championPool.length);
      player.champion = championPool[randomChampionIndex]?.name || 'Unavailable';
      championPool.splice(randomChampionIndex, 1); // Remove the selected champion from the pool
    }

    this.generated = true;
  }

}
