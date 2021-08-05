import { Component, OnInit } from '@angular/core';
import { LineModel } from '../models/line.model';
import { LineHttpService } from '../services/line-http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  selectedline: LineModel = {} ;
  lines: LineModel[] = [];
  formLine:FormGroup;

  constructor(private lineHttpService: LineHttpService,private formBuilder:FormBuilder ) { 
    this.formLine = this.newFormGroupLine();
  }

  ngOnInit(){
    this.getLines();
    this.getLine();
  }

  newFormGroupLine(): FormGroup {
    return this.formBuilder.group(
      {
        id:[null],
        names:[null],
        email:[null,[Validators.required,Validators.maxLength(40),Validators.minLength(3)]],
        age:[null],
        identification:[null],
      }
    )
  }

  getLines(): void {
    this.lineHttpService.getAll().subscribe(
      response => {
        console.log(response);
        this.lines = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  getLine(): void {
    this.lineHttpService.getOne(1).subscribe(
      response => {
        console.log(response);
        this.selectedline = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  createLine(): void {
    this.lineHttpService.create(this.selectedline).subscribe(
      response => {
        console.log(response);
        this.lines = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  updateLine(line: LineModel): void {
    this.lineHttpService.update(line.id, line).subscribe(
      response => {
        console.log(response);
        this.lines = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteLine(line: LineModel): void {
    this.lineHttpService.delete(line.id).subscribe(
      response => {
        console.log(response);
        this.removeLine(line);
      },
      error => {
        console.log(error);
      }
    );
  }

  removeLine(line:LineModel){
    this.lines = this.lines.filter(element => element.id !== line.id);
  }

  selectLine(line: LineModel){
    console.log(line);
    this.formLine.patchValue(line);
  }

  onSubmit(){
    console.log('onSubmit')
  }

  get idField(){
    return this.formLine.controls['id'];
  }

  get emailField(){
    return this.formLine.controls['email'];
  }
}
