import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() delete = new EventEmitter<boolean>();

  deleteQuote(d: boolean) {
    this.delete.emit(d);
  }

  constructor() {}

  ngOnInit(): void {}
}
