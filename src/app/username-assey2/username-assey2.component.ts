import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-assey2',
  templateUrl: './username-assey2.component.html',
  styleUrls: ['./username-assey2.component.css']
})
export class UsernameAssey2Component implements OnInit {
  userName = '';
  constructor() { }

  ngOnInit(): void {
  }

  onReset() {
    this.userName = '';
  }
}
