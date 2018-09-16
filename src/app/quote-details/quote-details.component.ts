import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isVote = new EventEmitter<boolean>();

  deleteQuote(complete: boolean) {
    this.isDelete.emit(complete);
  }
  increaseVote(votes: boolean) {
    this.isVote.emit(votes);
  }
  constructor() { }

  ngOnInit() {
  }

}
