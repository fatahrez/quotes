export class Quote {
  public showQuote: boolean;
  constructor(public author: string, public submittor: string, public theQuote: string, public upVote: number, public downVote: number) {
    this.showQuote = false;
    this.upVote = 0;
    this.downVote = 0;
  }
}
