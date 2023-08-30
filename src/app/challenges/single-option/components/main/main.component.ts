import { Component, Signal } from '@angular/core';
import { Vocabulum } from 'src/app/challenges/models/vocabulum.interface';
import { SingleChoiceService } from 'src/app/challenges/services/single-choice.service';
import { mockVocabula } from 'src/app/core/data/mockVocabula';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  latWord!: Signal<Vocabulum | null>;
  isCorrectAnswer!: Signal<boolean>;
  options: Vocabulum[] = mockVocabula;

  constructor(private singleChoiceService: SingleChoiceService) {}

  ngOnInit() {
    this.latWord = this.singleChoiceService.latinWord;
    this.isCorrectAnswer = this.singleChoiceService.isCorrectAnswer;
  }
}
