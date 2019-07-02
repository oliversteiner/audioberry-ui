import { Component, OnInit } from '@angular/core';
import { UiButton } from '../_models/uiButton';

@Component({
  selector: 'app-controlls',
  templateUrl: './controlls.component.html',
  styleUrls: ['./controlls.component.scss'],
})
export class ControllsComponent implements OnInit {

  // Buttons
  public buttonI: UiButton;
  public buttonII: UiButton;
  public buttonIII: UiButton;
  public buttonBL: UiButton;
  public buttonOn: UiButton;

  ngOnInit() {
    this.buttonI = new UiButton();
    this.buttonII = new UiButton();
    this.buttonIII = new UiButton();
    this.buttonBL = new UiButton();
    this.buttonOn = new UiButton();
    console.log(this.buttonI);

  }

  toggleButton(uiButton) {
    console.log(uiButton);
    // reset all Buttons
    this.buttonI.onOff = false;
    this.buttonII.onOff = false;
    this.buttonIII.onOff = false;
    this.buttonBL.onOff = false;

    uiButton.onOff = uiButton.onOff !== true;
  }
}
