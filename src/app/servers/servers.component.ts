import { ServerComponent } from '../server/server.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  serverCreated = false;

  servers = ['Test Server', 'Test server2'];

  constructor() {
    setTimeout(() => {
      console.log('fabien');
      this.allowNewServer = true;
    }, 2000);

  }
  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
