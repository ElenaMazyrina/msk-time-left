import {Component, inject} from '@angular/core';
import {TimeDownCalculationService} from '../time-down-calculation-service';

@Component({
  selector: 'app-man',
  imports: [],
  templateUrl: './man.html',
  styleUrl: './man.css',
})
export class Man {
  private readonly timeDownCalculationService = inject(TimeDownCalculationService);

}
