import { Injectable } from '@angular/core';
import {differenceInSeconds, format} from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TimeDownCalculationService {
  private readonly startDate = new Date(2026, 4, 19);
  private readonly goalDate = new Date(2026, 8, 3);
  private readonly nowDate = Date.now();

  public getDiffInPercentage(): number {
    const fullDurationInDays = differenceInSeconds(this.goalDate, this.startDate);
    const currentDurationInDays = differenceInSeconds(this.goalDate, Date.now());
    console.log(format(this.startDate, 'yyyy.MM.dd'));
    console.log(format(Date.now(), 'yyyy.MM.dd'));
    console.log(fullDurationInDays);
    console.log(currentDurationInDays);

    return (fullDurationInDays - currentDurationInDays) / fullDurationInDays * 100;
  }

  // const source = interval(1000).pipe(
  //   tap(() => console.log(this.toHHMMSS(differenceInSeconds(this.goalDate, Date.now())))),
  // );
  // source.subscribe();


  // private toHHMMSS(secs: number): string {
  //   const pad = (val: number) => ('0' + val).slice(-2);
  //   return [Math.floor(secs / 3600), Math.floor((secs % 3600) / 60), secs % 60]
  //     .map((v) => {
  //       console.log(v);
  //       return pad(v);
  //     })
  //     .join(':');
  // }

}
