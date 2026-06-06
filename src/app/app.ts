import {Component, signal, WritableSignal} from '@angular/core';
import {ProgressBar} from './progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  imports: [ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
}
