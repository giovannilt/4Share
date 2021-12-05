import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-directives-assey3',
  templateUrl: './directives-assey3.component.html',
  styleUrls: ['./directives-assey3.component.css']
})
export class DirectivesAssey3Component implements OnInit {
  password: string = 'tuna';
  displayDetails: boolean = false;
  logs = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  diplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.logs.push((this.logs.length + 1) + " " + new Date());
  }

}
