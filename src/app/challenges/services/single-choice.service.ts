//angular
import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

//app
import { TimerService } from './timer.service';
import { RandomizerService } from './randomizer.service';
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import { Vocabulum } from '../models/vocabulum.interface';

export interface QuizState {
  id: string;
  expected: string;
  actual: string;
  match: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SingleChoiceService {
  public currentIndex: WritableSignal<number> = signal(0);

  public randomizedIdxArray: WritableSignal<number[]> = signal([]);

  public selectedOption: WritableSignal<null | Vocabulum> = signal(null);

  public latinWord: WritableSignal<null | Vocabulum> = signal(null);

  public isCorrectAnswer: Signal<boolean> = computed(
    () => this.selectedOption()?.id === this.latinWord()?.id
  );
  public shouldProcessUserAnswer: WritableSignal<boolean> = signal(false);

  public quizState: WritableSignal<QuizState[]> = signal([]);

  public showResult: WritableSignal<boolean> = signal(false);

  private timerConfigSec = 30;

  constructor(
    private timerService: TimerService,
    private randomizer: RandomizerService
  ) {
    this.randomizedIdxArray.set(this.randomizer.buildRandomizedIdxArray());

    // this.timerService.setTime(this.timerConfigSec);
    // this.timerService.startCountdown();

    effect(
      () => {
        this.play();
      },
      { allowSignalWrites: true }
    );

    // effect(() => {
    //   if (this.isCorrectAnswer()) {
    //     this.timerService.stopCountdown();
    //   }
    // });
  }

  public get shouldDisableButton(): boolean {
    return this.selectedOption() === null;
  }

  public updateSelectOption(option: Vocabulum): void {
    this.selectedOption.set(option);
  }

  public finish() {
    this.showResult.update((state) => !state);
  }

  public updateState() {
    this.shouldProcessUserAnswer.update((state) => !state);
  }

  private play() {
    const idx = this.currentIndex();
    if (mockVocabula[idx]) {
      this.latinWord.set(mockVocabula[idx]);

      if (this.shouldProcessUserAnswer()) {
        const key = this.latinWord()?.id as string;
        this.quizState.update((state) => [
          ...state,
          {
            id: key,
            expected: this.latinWord()?.translation as string,
            actual: this.selectedOption()?.translation as string,
            match: this.isCorrectAnswer(),
          },
        ]);
        this.updateState();
        this.currentIndex.update((idx) => (idx += 1));
        this.timerService.setTime(this.timerConfigSec);
        this.timerService.startCountdown();
      }
    } else {
      this.showResult.update((showResult) => !showResult);
    }
  }
}
