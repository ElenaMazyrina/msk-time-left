import {Component, signal, WritableSignal} from '@angular/core';
import {ProgressBar} from './progress-bar/progress-bar';
import {Man} from './man/man';

@Component({
  selector: 'app-root',
  imports: [ProgressBar, Man],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title: WritableSignal<string> = signal('How many days?');
}
