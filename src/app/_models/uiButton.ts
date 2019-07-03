export interface UiButton {
  onOff?: boolean;
  name?: string;
  id: string;
}

export class UiButton {
  constructor(name: string = 'Button') {
    this.onOff = false;
    this.name = name;
    this.id = 'button-0';
  }
}
