import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '../../../challenges/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  countdown!: Observable<any>;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.countdown = this.timerService.getCountdown();
  }
}
