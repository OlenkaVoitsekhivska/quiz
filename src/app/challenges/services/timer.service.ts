import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  interval,
  takeWhile,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private countdownDuration!: number; // Countdown duration in seconds
  private countdown$!: BehaviorSubject<number>;
  private countdownSubscription!: Subscription;

  setTime(time: number): void {
    this.countdownDuration = time;
    this.countdown$ = new BehaviorSubject<number>(this.countdownDuration);
  }

  startCountdown(): void {
    this.countdownSubscription = interval(1000)
      .pipe(takeWhile((value) => value < this.countdownDuration))
      .subscribe((value) => {
        const remainingSeconds = this.countdownDuration - value;
        this.countdown$.next(remainingSeconds);
      });
  }

  stopCountdown(): void {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }

  getCountdown(): Observable<number> {
    return this.countdown$.asObservable();
  }
}
