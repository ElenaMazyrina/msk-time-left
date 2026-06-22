import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {TimeDownCalculationService} from '../time-down-calculation-service';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly timeDownCalculationService = inject(TimeDownCalculationService);
  protected readonly durationInDays = this.timeDownCalculationService.getDifferenceInDays();


  ngAfterViewInit(): void {
    this.setProgress(this.timeDownCalculationService.getDiffInPercentage());
  }

  private setProgress(percent: number): void {
    // TODO: if percent = 100
    const bar = this.el.nativeElement.querySelector('.progress-bar');
    bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }
}
