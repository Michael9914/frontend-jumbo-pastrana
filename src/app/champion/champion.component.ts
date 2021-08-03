import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
})
export class ChampionComponent implements OnInit {
  blockedPanel: boolean=false;
  value: number = 50;
  rangeValues: number[] = [20,80];

  constructor() { }

  ngOnInit(): void {
    }

}
