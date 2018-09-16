import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Input() addNewQuote: Function;
  @Output() addQuote = new EventEmitter <Quote>();

  newQuote = new Quote('', '', '', 0, 0);
  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}
