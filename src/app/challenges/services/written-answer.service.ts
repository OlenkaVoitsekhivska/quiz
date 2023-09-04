//angular
import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

//app
import { RandomizerService } from './randomizer.service';
import { QuizState } from './single-choice.service';
import { mockVocabula as VOCABULA } from 'src/app/core/data/mockVocabula';
import { Vocabulum } from '../models/vocabulum.interface';

@Injectable({
  providedIn: 'root',
})
export class WrittenAnswerService {
  public form!: FormGroup;

  public quizState: WritableSignal<QuizState[]> = signal([]);

  public latWord: WritableSignal<Vocabulum | null> = signal(null);

  public isCorrectAnswer: WritableSignal<boolean> = signal(false);

  public showResult: WritableSignal<boolean> = signal(false);

  private currentIndex: WritableSignal<number> = signal(0);

  private randomizedIdxArray: WritableSignal<number[]> = signal([]);

  private shouldProcessUserAnswer: WritableSignal<boolean> = signal(false);

  constructor(private fb: FormBuilder, private randomizer: RandomizerService) {
    this.initializeForm();
    this.randomizedIdxArray.set(this.randomizer.buildRandomizedIdxArray());

    effect(
      () => {
        this.play();
      },
      { allowSignalWrites: true }
    );
  }

  get userAnswer(): AbstractControl<string> {
    return this.form.get('answer') as AbstractControl<string>;
  }

  get sanitizedUserInput(): string {
    return this.userAnswer?.value.trim().toLowerCase();
  }

  public handleSubmit() {
    this.shouldProcessUserAnswer.update((state) => !state);
  }

  public assessAnswer(): boolean {
    return this.latWord()?.word.toLowerCase() === this.sanitizedUserInput;
  }

  private initializeForm() {
    this.form = this.fb.group({
      answer: ['', Validators.required],
    });
  }

  private play() {
    const idx = this.currentIndex();
    if (VOCABULA[idx]) {
      this.latWord.set(VOCABULA[idx]);

      if (this.shouldProcessUserAnswer()) {
        //assessing user input: true if correct and false otherwise
        const result = this.assessAnswer();
        const key = this.latWord()?.id as string;
        //updating the quiz state
        this.quizState.update((state) => [
          ...state,
          {
            id: key,
            expected: this.latWord()?.word as string,
            actual: this.sanitizedUserInput,
            match: result,
          },
        ]);
        //reset the form after submit;
        this.form.reset();
        this.shouldProcessUserAnswer.update((state) => !state);
        this.currentIndex.update((idx) => (idx += 1));
      }
    } else {
      this.showResult.update((showResult) => !showResult);
    }
  }
}
