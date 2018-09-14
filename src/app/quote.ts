export class Quote {
  public showQuote: boolean;
  constructor(public id: number, public author: string, public theQuote: string) {
    this.showQuote = false;
  }
}
