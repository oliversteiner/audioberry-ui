import { Component, OnInit } from '@angular/core';
import { UiButton } from '../_models/uiButton';
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

  constructor(private pythonService: PythonService){}
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

    uiButton.onOff = uiButton.onOff !== true;
    const msg = 'Push: '+uiButton.name;
    this.pythonService.sendMessage(msg);
    console.log(msg);

  }


}
