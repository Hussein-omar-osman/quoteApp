import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { FormsModule } from '@angular/forms';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePublishedPipe } from './date-published.pipe';
import { HighestVotesDirective } from './highest-votes.directive';

@NgModule({
  declarations: [AppComponent, QuoteComponent, QuoteFormComponent, QuoteDetailsComponent, DatePublishedPipe, HighestVotesDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
