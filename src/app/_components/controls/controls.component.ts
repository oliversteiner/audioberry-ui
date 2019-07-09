import {Component, OnInit} from '@angular/core';
import {PythonService} from '../../_services/python.service';
import {UiButton} from '../../_models/uiButton';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {


  // Buttons
  public buttons: UiButton[];
  public buttonI: UiButton;
  public buttonII: UiButton;
  public buttonIII: UiButton;

  // Display

// Volume Knob
  public volumeValue: number;

  public knOptions = {
    readOnly: false,
    animate: false,
    size: 140,
    unit: '%',
    textColor: '#4b4b4b',
    fontSize: '20',
    fontWeigth: '700',
    fontFamily: 'Roboto',
    valueformat: 'percent',
    value: 50,
    max: 100,
    trackWidth: 19,
    barWidth: 20,
    trackColor: '#858585',
    barColor: '#636363',
    subText: {
      enabled: true,
      fontFamily: 'Verdana',
      font: '14',
      fontWeight: 'bold',
      text: '',
      color: '#ffffff',
      offset: 7
    },
  };

  constructor(private pythonService: PythonService) {
  }

  ngOnInit() {


    this.buttonI = new UiButton('Button I', 'button-1');
    this.buttonII = new UiButton('Button II', 'button-2');
    this.buttonIII = new UiButton('Button III', 'button-3');

    this.buttons = [
      this.buttonI,
      this.buttonII,
      this.buttonIII,
    ];

    this.volumeValue = 50;

    this.pythonService
      .getMessagesButton()
      .subscribe((message: string) => {
        const buttonid = 'button-' + message;
        this.setButtonactive(buttonid);
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

  setVolume() {
    this.pythonService.setVolume(this.volumeValue);
  }
}
