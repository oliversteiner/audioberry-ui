import {Component, OnInit} from '@angular/core';
import {UiButton} from '../_models/uiButton';
import {PythonService} from '../_services/python.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  // Buttons
  public buttonI: UiButton;
  public buttonII: UiButton;
  public buttonIII: UiButton;
  public buttonBL: UiButton;
  public buttonOn: UiButton;

  constructor(private pythonService: PythonService) {
  }

  ngOnInit() {
    this.buttonI = new UiButton('Button I');
    this.buttonII = new UiButton('Button II');
    this.buttonIII = new UiButton('Button III');
    this.buttonBL = new UiButton('Button BL');
    this.buttonOn = new UiButton('Button On');

    console.log(this.buttonI);
  }

  toggleButton(uiButton) {
    // reset all Buttons
    this.buttonI.onOff = false;
    this.buttonII.onOff = false;
    this.buttonIII.onOff = false;
    this.buttonBL.onOff = false;

    this.buttonI.id = 'button-1';
    this.buttonII.id = 'button-2';
    this.buttonIII.id = 'button-3';
    this.buttonBL.id = 'button-BL';

    uiButton.onOff = uiButton.onOff !== true;
    const msg = 'Push: ' + uiButton.name;
    this.pythonService.sendMessage(msg);

    switch (uiButton.id) {
      case 'button-1':
        this.pythonService.play('1');
        break;
      case 'button-2':
        this.pythonService.play('2');
        break;
      case 'button-3':
        this.pythonService.play('3');
        break;
      default:
        this.pythonService.play('bl');
        break;

    }
    console.log(msg);
  }
}
