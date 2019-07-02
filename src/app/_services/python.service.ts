import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PythonService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  play(station: string) {
    this.socket.emit('play-station', station);
  }

  getMessage() {
    return this.socket.fromEvent('message').pipe(map(data => data));
  }
}
