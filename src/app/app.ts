import {Component, inject, OnDestroy, signal} from '@angular/core';
import {ProgressBar} from './progress-bar/progress-bar';
import {Relax} from './relax/relax';
import {Subject, takeUntil, timer} from 'rxjs';
import {TimeDownCalculationService} from './time-down-calculation-service';

@Component({
  selector: 'app-root',
  imports: [ProgressBar, Relax],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnDestroy {
  protected isRelaxVisible = signal<boolean>(false);
  private readonly timeDownCalculationService = inject(TimeDownCalculationService);
  protected readonly isOver = this.timeDownCalculationService.diffInPercentage >= 100;
  private readonly destroy$: Subject<void> = new Subject<void>();

  protected showRelax(): void {
    this.isRelaxVisible.set(true);
    timer(1000 * 6)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.isRelaxVisible.set(false));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
