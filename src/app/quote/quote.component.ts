import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  allQuotes: Quote[] = [
    new Quote('This is good', 'Hussein', 'Maclcom X', new Date()),
    new Quote('This is bad', 'hassan', 'Maclcom z', new Date()),
    new Quote('This is best', 'siham', 'Maclcom A', new Date()),
  ];

  addUpvote(value: number) {
    this.allQuotes[value].upvotes += 1;
  }
  addDownvote(value: number) {
    this.allQuotes[value].downvotes += 1;
  }
  constructor() {}

  ngOnInit(): void {}
}
