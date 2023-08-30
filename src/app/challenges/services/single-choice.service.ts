import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import { Vocabulum } from '../models/vocabulum.interface';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root',
})
export class SingleChoiceService {
  private timerConfigSec = 30;

  public selectedOption: WritableSignal<null | Vocabulum> = signal(null);

  public latinWord: WritableSignal<null | Vocabulum> = signal(null);

  public isCorrectAnswer: Signal<boolean> = computed(
    () => this.selectedOption()?.id === this.latinWord()?.id
  );

  constructor(private timerService: TimerService) {
    this.randomLatinWord();
    this.timerService.setTime(this.timerConfigSec);
    this.timerService.startCountdown();

    effect(() => {
      if (this.isCorrectAnswer()) {
        this.timerService.stopCountdown();
      }
    });
  }

  public randomLatinWord(): void {
    const randomIndex = Math.floor(Math.random() * mockVocabula.length);
    this.latinWord.set(mockVocabula[randomIndex]);
  }

  public updateSelectOption(option: Vocabulum): void {
    this.selectedOption.set(option);
  }
}
