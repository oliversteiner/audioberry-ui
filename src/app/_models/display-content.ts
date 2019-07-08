export interface DisplayContent {
  row1?: string;
  row2?: string;
}

export class DisplayContent {
  row1?: string;
  row2?: string;


  constructor(row1, row2) {
    this.row1 = row1;
    this.row2 = row2;
  }
}
