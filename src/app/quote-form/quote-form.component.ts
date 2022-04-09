import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  publisher: string;
  quote: string;
  author: string;
  newQuote: Quote;

  @Output() pushQuote: EventEmitter<Quote> = new EventEmitter();

  onSubmitPublish(form: NgForm) {
    console.log(form.value.description);
    console.log(form.value.publisher);
    this.publisher = form.value.publisher;
    this.quote = form.value.description;
    this.author = form.value.author;

    this.newQuote = new Quote(
      this.quote,
      this.publisher,
      this.author,
      new Date()
    );

    this.pushQuote.emit(this.newQuote);
    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
