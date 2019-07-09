import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PythonService {
  constructor(private socket: Socket) {
  }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  buttonAction(station: string) {
    this.socket.emit('button_action', station);
  }


  public getMessagesButton = () => {
    return Observable.create((observer) => {
      this.socket.on('audioberry_button', (message) => {
        observer.next(message);
      });
    });
  }

  public getMessagesDisplay = () => {
    return Observable.create((observer) => {
      this.socket.on('audioberry_display', (message) => {
        observer.next(message);
      });
    });
  }

  setVolume(volumeValue: number) {
    this.socket.emit('volume_action', volumeValue);
  }
}
