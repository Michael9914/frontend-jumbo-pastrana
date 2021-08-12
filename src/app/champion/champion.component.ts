import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChampionModel } from '../models/champion.model'
import { ChampionHttpService } from '../services/champion-http.service';
import {MessageService} from '../services/message.service';
import { AppService } from '../services/app.service';



@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css'],
})
export class ChampionComponent implements OnInit {
  selectedChampion: ChampionModel = {};
  champions: ChampionModel[] = [];
  formChampion:FormGroup;
  

  constructor(private championHttpService: ChampionHttpService, 
              private formBuilder: FormBuilder,
              private appService: AppService,
              public messageService: MessageService) {           
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
        date:[null,[Validators.required]],
        description:[null,[Validators.required]],
        approved:[null],
        title:[null,[Validators.required]],
      }
    )
  }

  getChampions(): void {
    this.championHttpService.getAll().subscribe(
      response => {
        this.champions = response.data;
      },
      error => {
        this.messageService.error(error);
      }
    );

  }

  getChampion(): void {
    this.championHttpService.getOne(1).subscribe(
      response => {
        this.selectedChampion = response.data;
      },
      error => {
        this.messageService.error(error);
      }
    );

  }

  storeChampion(champion: ChampionModel): void {
    this.championHttpService.store(champion).subscribe(
      response => {
        this.saveChampion(response.data);
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
      }
    );

  }

  updateChampion(champion: ChampionModel): void {
    this.championHttpService.update(champion.id, champion).subscribe(
      response => {
        this.saveChampion(champion);
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
      }
    );
  }

  deleteChampion(champion: ChampionModel): void {
    this.championHttpService.delete(champion.id).subscribe(
      response => {
        this.removeChampion(champion);
        this.messageService.success(response);
      },
      error => {
        this.messageService.error(error);
      }
    );
  }

  saveChampion(champion: ChampionModel){
    const index = this.champions.findIndex(element => element.id === champion.id);
    if (index === -1) {
      this.champions.push(champion);
    } else {
      this.champions[index] = champion;
    }  
}

  removeChampion(champion: ChampionModel){
    this.champions = this.champions.filter(element => element.id !== champion.id);   
}

  selectChampion(champion: ChampionModel) {
    this.formChampion.patchValue(champion);
  }

  onSubmit(champion: ChampionModel) {
    if (this.formChampion.valid) {
      if(champion.id) {
      this.updateChampion(champion);
    } else {
      this.storeChampion(champion);
    }
    this.formChampion.reset();
  } else {
    this.formChampion.markAllAsTouched();
  }
}

  get idField(){
    return this.formChampion.controls['id'];
  }

  get codeField(){
    return this.formChampion.controls['code'];
  }

  get descriptionField(){
    return this.formChampion.controls['description'];
  }

  get dateField(){
    return this.formChampion.controls['date'];
  }

  get approvedField(){
    return this.formChampion.controls['approved'];
  }

  get titleField(){
    return this.formChampion.controls['title'];
  }

}
