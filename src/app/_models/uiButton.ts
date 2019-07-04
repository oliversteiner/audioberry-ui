export interface UiButton {
  active?: boolean;
  name?: string;
  id: string;
  light: boolean;
}

export class UiButton {
  constructor(name: string = 'Button', id: string = 'button-0') {
    this.active = false;
    this.name = name;
    this.id = id;
    this.light = false;
  }
}
