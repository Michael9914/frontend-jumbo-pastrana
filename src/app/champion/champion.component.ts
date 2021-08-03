import { Component, OnInit } from '@angular/core';
import { ChampionModel } from '../models/champion.model'
import { ChampionHttpService } from '../services/champion-http.service';


@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
})
export class ChampionComponent implements OnInit {
  champion: ChampionModel = {};
  champions: ChampionModel[] = [];

  constructor(private championHttpService: ChampionHttpService) {

  }

  ngOnInit() {
    this.getChampions();
    this.getChampion();
  }

  getChampions(): void {
    this.championHttpService.getAll().subscribe(
      response => {
        console.log(response);
        this.champions = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  getChampion(): void {
    this.championHttpService.getOne(1).subscribe(
      response => {
        console.log(response);
        this.champion = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  createChampion(): void {
    this.championHttpService.create(this.champion).subscribe(
      response => {
        console.log(response);
        this.champion = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  update(): void {
    this.championHttpService.update(this.champion.id, this.champion).subscribe(
      response => {
        console.log(response);
        this.champion = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteChampion(): void {
    this.championHttpService.delete(this.champion.id).subscribe(
      response => {
        console.log(response);
        this.champion = response['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

}
