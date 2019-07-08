import {Component, OnInit} from '@angular/core';
import {DisplayContent} from '../../_models/display-content';
import {PythonService} from '../../_services/python.service';

@Component({
  selector: 'app-radio-display',
  templateUrl: './radio-display.component.html',
  styleUrls: ['./radio-display.component.scss']
})
export class RadioDisplayComponent implements OnInit {

  public displayContent: DisplayContent; // 2 Rows

  constructor(private pythonService: PythonService) {
  }

  ngOnInit() {
    this.displayContent = new DisplayContent('', 'Bluetooth');

    this.pythonService
      .getMessagesDisplay()
      .subscribe((rowMessage: string) => {
        this.setDisplayContent(rowMessage);
      });
  }

  setDisplayContent(rowMessage: string) {
    const message = rowMessage.split(':', 2);
    console.log('Display: ', message);
    this.displayContent.row1 = message[0];
    this.displayContent.row2 = message[1];

  }
}
