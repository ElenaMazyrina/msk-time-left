import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';
import {TimeDownCalculationService} from '../time-down-calculation-service';
import {Man} from '../man/man';

@Component({
  selector: 'app-progress-bar',
  imports: [Man],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly timeDownCalculationService = inject(TimeDownCalculationService);

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // this.setProgress(this.timeDownCalculationService.getDiffInPercentage());
    this.setProgress(30);
  }

  private setProgress(percent: number): void {
    const bar = this.el.nativeElement.querySelector('.progress-bar');
    bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }
}
