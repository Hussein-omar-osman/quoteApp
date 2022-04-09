import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  onSubmit() {
    console.log('form submitted');
  }

  constructor() {}

  ngOnInit(): void {}
}
