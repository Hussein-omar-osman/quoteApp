import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
