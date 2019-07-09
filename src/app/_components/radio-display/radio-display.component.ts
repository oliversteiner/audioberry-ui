import {Component, Input, OnInit} from '@angular/core';
import {DisplayContent} from '../../_models/display-content';
import {PythonService} from '../../_services/python.service';
import {faBluetoothB} from '@fortawesome/free-brands-svg-icons/faBluetoothB';

@Component({
  selector: 'app-radio-display',
  templateUrl: './radio-display.component.html',
  styleUrls: ['./radio-display.component.scss']
})
export class RadioDisplayComponent implements OnInit {

  @Input() volumeValue;

  public displayContent: DisplayContent;
  bluetooth: boolean;

  constructor(private pythonService: PythonService) {
  }

  ngOnInit() {
    this.displayContent = new DisplayContent('', '');

    // show Bluetooth symbol
    this.bluetooth = true;

    // get Messages from Raspberry Pi
    this.pythonService
      .getMessagesDisplay()
      .subscribe((rowMessage: string) => {
        this.setDisplayContent(rowMessage);
      });
  }



  setDisplayContent(rowMessage: string) {
    const message = rowMessage.split(':', 2);
    console.log('Display: ', message);

    if (message[0] === 'b') {
      // show Bluetooth-B
      this.bluetooth = true;
      this.displayContent.row1 = '';
    } else if (message[0] === 'Stop') {
      this.displayContent.row1 = message[0];

      // show for 3 Seconds "Stop", then change Text to Bluetooth-B
      this.delay(2000).then(() => {
        this.bluetooth = true;
        this.displayContent.row1 = '';
      });

    } else {
      // Show Message (Station-Name)
      this.bluetooth = false;
      this.displayContent.row1 = message[0];
    }


  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log('fired'));
  }
}
