import {AfterViewInit, Component, ElementRef, inject} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar implements AfterViewInit {
  private readonly el: ElementRef<any> = inject(ElementRef);

  ngAfterViewInit(): void {
    this.setProgress(10);
    }

  // Function to update progress
  private setProgress(percent: number): void {
    const bar = this.el.nativeElement.querySelector('.progressBar');
    bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  }
}
