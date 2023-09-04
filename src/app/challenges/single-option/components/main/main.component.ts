import { Component, OnInit, Signal } from '@angular/core';
import { Vocabulum } from 'src/app/challenges/models/vocabulum.interface';
import {
  QuizState,
  SingleChoiceService,
} from 'src/app/challenges/services/single-choice.service';
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import { ButtonType } from 'src/app/core/models/button-type';
import { Language } from 'src/app/core/models/language.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  latWord!: Signal<Vocabulum | null>;
  isCorrectAnswer!: Signal<boolean>;
  showResults!: Signal<boolean>;
  quizState!: Signal<QuizState[]>;

  options: Vocabulum[] = mockVocabula;
  optionCardLanguage: Language = Language.EN;

  buttonLabel = 'next =>';
  buttonType: ButtonType = ButtonType.BUTTON;

  questionText = 'Translate the following word into Latin:';

  constructor(private singleChoiceService: SingleChoiceService) {}

  ngOnInit() {
    this.latWord = this.singleChoiceService.latinWord;
    this.isCorrectAnswer = this.singleChoiceService.isCorrectAnswer;
    this.showResults = this.singleChoiceService.showResult;
    this.quizState = this.singleChoiceService.quizState;
  }

  public get shouldDisableButton(): boolean {
    return this.singleChoiceService.shouldDisableButton;
  }

  public handleAnswer() {
    this.singleChoiceService.updateState();
  }
}
