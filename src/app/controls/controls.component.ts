import {Component, OnInit} from '@angular/core';
import {PythonService} from '../_services/python.service';
import {UiButton} from '../_models/uiButton';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {

  public display: string;

  // Buttons
  public buttons: UiButton[];

  public buttonI: UiButton;
  public buttonII: UiButton;
  public buttonIII: UiButton;
  public buttonBL: UiButton;

  // public buttonOn: UiButton;

  constructor(private pythonService: PythonService) {
  }

  ngOnInit() {
    this.display = '';

    this.buttonI = new UiButton('Button I', 'button-1');
    this.buttonII = new UiButton('Button II', 'button-2');
    this.buttonIII = new UiButton('Button III', 'button-3');
    this.buttonBL = new UiButton('Button BL', 'button-4');

    this.buttons = [
      this.buttonI,
      this.buttonII,
      this.buttonIII,
      this.buttonBL,
    ];

    this.pythonService
      .getMessagesButton()
      .subscribe((message: string) => {
        const buttonid = 'button-' + message;
        this.setButtonactive(buttonid);
      });

    this.pythonService
      .getMessagesDisplay()
      .subscribe((message: string) => {
        this.setDisplay(message);
      });

  }

  toggleButton(uiButton) {
    this.buttons.map(button => {
      if (uiButton.id === button.id) {
        button.active = button.active !== true;
      } else {
        button.active = false;
      }
    });

    this.pythonService.buttonAction(uiButton);
  }

  setButtonactive(id) {
    this.buttons.filter(
      (button) => {
        button.light = button.id === id;
      }
    );
  }


  setDisplay(message) {
    console.log('Display: ', message);
    this.display = message;

  }
}
