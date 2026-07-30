import { Injectable } from '@angular/core';
import {differenceInDays, differenceInSeconds, format} from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TimeDownCalculationService {
  public diffInPercentage: number = 0;
  private readonly startDate = new Date(2026, 4, 19);
  private readonly goalDate = new Date(2026, 7, 3);

  constructor() {
    this.diffInPercentage = this.getDiffInPercentage();
  }

  public getDifferenceInDays(): number {
    return differenceInDays(this.goalDate, Date.now());
  }

  private getDiffInPercentage(): number {
    const durationInSecondsFromStart = differenceInSeconds(this.goalDate, this.startDate);
    const durationInSecondsFromNow = differenceInSeconds(this.goalDate, Date.now());

    return (durationInSecondsFromStart - durationInSecondsFromNow) / durationInSecondsFromStart * 100;
  }
}
