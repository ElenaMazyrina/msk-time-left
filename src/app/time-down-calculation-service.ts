import { Injectable } from '@angular/core';
import {differenceInDays, differenceInSeconds, format} from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TimeDownCalculationService {
  private readonly startDate = new Date(2026, 4, 19);
  private readonly goalDate = new Date(2026, 7, 3);
  private readonly nowDate = Date.now();

  public getDiffInPercentage(): number {
    const durationInSecondsFromStart = differenceInSeconds(this.goalDate, this.startDate);
    const durationInSecondsFromNow = differenceInSeconds(this.goalDate, Date.now());

    return (durationInSecondsFromStart - durationInSecondsFromNow) / durationInSecondsFromStart * 100;
  }

  public getDifferenceInDays(): number {
    return differenceInDays(this.goalDate, Date.now());
  }
}
