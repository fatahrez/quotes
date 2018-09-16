import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Abdul', 'yeye', 'Hey thea'),
    new Quote(2, 'Fatah', 'mwenye', 'We cool')
  ];

  addNewQuote(id: number, author: string, submittor: string, quote: string) {
      // const quoteLength = this.quotes.length;
      // const idNew = quoteLength + 1;
      return this.quotes.push(new Quote(id, author, submittor, quote));
    }

  deleteQuote(isDelete, index) {
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].author}`);
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
