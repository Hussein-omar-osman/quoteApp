import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  publisher: string;
  quote: string;
  author: string;

  onSubmit(form: NgForm) {
    // console.log(form);
    // console.log(form.value);
    // console.log(form.value.author);
    console.log(form.value.description);
    console.log(form.value.publisher);
    this.publisher = form.value.publisher;
    this.quote = form.value.description;
    this.author = form.value.author;

    form.reset();
  }

  constructor() {}

  ngOnInit(): void {}
}
