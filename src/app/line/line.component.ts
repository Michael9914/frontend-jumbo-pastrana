import { Component, OnInit } from '@angular/core';
import { LineModel } from '../models/line.model';
import { LineHttpService } from '../services/line-http.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  line: LineModel = {} ;
  lines: LineModel[] = [];

  constructor(private lineHttpService: LineHttpService) { }

  ngOnInit(){
    this.getLines();
    this.getLine();
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
        this.line = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  createLine(): void {
    this.lineHttpService.create(this.line).subscribe(
      response => {
        console.log(response);
        this.line = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  update(): void {
    this.lineHttpService.update(this.line.id, this.line).subscribe(
      response => {
        console.log(response);
        this.line = response['data'];
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteline(): void {
    this.lineHttpService.delete(this.line.id).subscribe(
      response => {
        console.log(response);
        this.line = response['data'];
      },
      error => {
        console.log(error);
      }
    );
  }

}
