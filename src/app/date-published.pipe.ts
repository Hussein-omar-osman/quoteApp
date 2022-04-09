import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePublished',
})
export class DatePublishedPipe implements PipeTransform {
  transform(value: unknown): unknown {
    return null;
  }
}
