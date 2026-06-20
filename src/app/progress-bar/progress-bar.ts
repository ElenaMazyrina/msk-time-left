import {AfterViewInit, Component, ElementRef, inject, OnDestroy, signal} from '@angular/core';
import {TimeDownCalculationService} from '../time-down-calculation-service';
import {Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly timeDownCalculationService = inject(TimeDownCalculationService);
  protected readonly durationInDays = this.timeDownCalculationService.getDifferenceInDays();
  protected isSofaVisible = signal<boolean>(false);
  private destroy$: Subject<void> = new Subject<void>();

  ngAfterViewInit(): void {
    this.setProgress(this.timeDownCalculationService.getDiffInPercentage());
  }

  protected showSofa(): void {
    this.isSofaVisible.set(true);
    timer(1000 * 10)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.isSofaVisible.set(false));
  }

  private setProgress(percent: number): void {
    const bar = this.el.nativeElement.querySelector('.progress-bar');
    bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
