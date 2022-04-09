import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePublished',
})
export class DatePublishedPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dayCounter = dateDifferenceSeconds / secondsInDay;

    return Math.floor(dayCounter);
  }
}
