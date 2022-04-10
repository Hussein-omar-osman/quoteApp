import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  allQuotes: Quote[] = [
    new Quote(
      'A wise man can learn more from his enemies than a fool from his friends.',
      'Hussein',
      'Malcom X',
      new Date(2022, 3, 4)
    ),
    new Quote(
      `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking`,
      'Klaus',
      'Steve Jobs',
      new Date(2022, 3, 4)
    ),
    new Quote(
      `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
      'Mark',
      'Maclcom A',
      new Date(2022, 3, 4)
    ),
  ];

  // allQuotes:Quote[][0].upvotes = 10;

  addUpvote(value: number) {
    this.allQuotes[value].upvotes += 1;
  }
  addDownvote(value: number) {
    this.allQuotes[value].downvotes += 1;
  }

  addQuote(quote: Quote) {
    let today = new Date();
    quote.datePublished = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    this.allQuotes.unshift(quote);
  }

  toggleDetails(index: number) {
    this.allQuotes[index].showDescription =
      !this.allQuotes[index].showDescription;
  }

  clearQuote(d: boolean, index: number) {
    if (d) {
      this.allQuotes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
