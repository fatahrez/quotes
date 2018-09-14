import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Abdul', 'Hey thea'),
    new Quote(2, 'Fatah', 'We cool')
  ];

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
