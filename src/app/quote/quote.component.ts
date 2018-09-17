import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  color: string;
  quotes = [
    new Quote('Zlatan', 'Fatah', 'Genius always finds a way', 0, 0),
    new Quote('Drake', 'Abdul', 'Started from the bottom now we here ', 0, 0)
  ];

  get addNewQuoteFunc() {
    return this.addNewQuote.bind(this);
  }

  addNewQuote(author: string,  submittor: string, theQuote: string) {
      // const quoteLength = this.quotes.length;
      // const idNew = quoteLength + 1;
      const quote: Quote = new Quote(author, submittor, theQuote, 0, 0);
      this.quotes.push(quote);
    }
    increaseVote(isVote, index) {
      if (isVote) {
        this.quotes[index].upVote += 1;
      } else {
        this.quotes[index].downVote += 1;
      }
    }

  deleteQuote(isDelete, index) {
    if (isDelete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
  }
  toogleDetails(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }


  constructor() { }

  ngOnInit() {
  }

}
