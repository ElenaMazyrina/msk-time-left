import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {differenceInDays, format} from 'date-fns';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar implements AfterViewInit {
  private readonly nowDate = new Date(2026, 4, 19);
  private readonly goalDate = new Date(2026, 8, 3);
  private readonly el = inject(ElementRef);

  ngAfterViewInit(): void {
    const fullDurationInDays = differenceInDays(this.goalDate, this.nowDate);
    const currentDurationInDays = differenceInDays(this.goalDate, Date.now());
    console.log(format(this.nowDate, 'yyyy.MM.dd'));
    console.log(format(Date.now(), 'yyyy.MM.dd'));
    this.setProgress(10);
  }

  private setProgress(percent: number): void {
    const bar = this.el.nativeElement.querySelector('.progressBar');
    bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }
}
