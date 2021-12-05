import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server is created!';
  serverName = 'Test Server Name';
  serverCreated: boolean =false;
servers = ['MyTestServe01', 'MyTestServer02']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }


  // onUpdateUsername($event: Event){
  //   this.userName= (<HTMLInputElement>$event.target).value;
  //   if(this.userName !=''){
  //     this.userNameStatus = true;
  //   } else {
  //     this.userNameStatus = false;
  //   }
  // }
  // onUpdateServerName($event: Event){
  //   this.serverName = (<HTMLInputElement>$event.target).value;
  // }
}
