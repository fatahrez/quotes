export class Quote {
  public showQuote: boolean;
  constructor(public id: number, public author: string, public submittor: string, public quote: string) {
    this.showQuote = false;
  }
}
