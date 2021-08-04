import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChampionModel } from '../models/champion.model'
import { ChampionHttpService } from '../services/champion-http.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
})
export class ChampionComponent implements OnInit {
  selectedChampion: ChampionModel = {};
  champions: ChampionModel[] = [];
  formChampion:FormGroup;

  constructor(private championHttpService: ChampionHttpService, private formBuilder:FormBuilder) {
    this.formChampion = this.newFormGroupChampion();
  }

  ngOnInit() {
    this.getChampions();
    this.getChampion();
  }

  newFormGroupChampion(): FormGroup {
    return this.formBuilder.group(
      {
        id:[null],
        code:[null,[Validators.required,Validators.maxLength(5),Validators.minLength(3)]],
        date:[null],
        description:[null],
        approved:[null],
        title:[null,[Validators.required,Validators.maxLength(5),Validators.minLength(3)]],
      }
    )
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
        this.selectedChampion = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  createChampion(): void {
    this.championHttpService.create(this.selectedChampion).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

  }

  updateChampion(champion: ChampionModel): void {
    this.championHttpService.update(champion.id, champion).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteChampion(champion: ChampionModel): void {
    this.championHttpService.delete(champion.id).subscribe(
      response => {
        console.log(response);
        this.removeChampion(champion);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeChampion(champion: ChampionModel){
    this.champions = this.champions.filter(element => element.id !== champion.id);   
}

  selectChampion(champion: ChampionModel) {
    console.log(champion);
    this.formChampion.patchValue(champion);
  }

  onSubmit(){
    console.log('onSubmit')
  }

  get idField(){
    return this.formChampion.controls['id'];
  }

  get codeField(){
    return this.formChampion.controls['code'];
  }

  get titleField(){
    return this.formChampion.controls['title'];
  }

}
