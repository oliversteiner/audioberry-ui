export interface UiButton {
  onOff: boolean;
  name?: string;
}

export class UiButton {
  constructor(name: string = 'Button') {
    this.onOff = false;
    this.name = name;
  }

}
