//angular
import {
  Component,
  OnInit,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//third-party
import { ChartModule } from 'primeng/chart';

//app
import { WrittenAnswerService } from '../../services/written-answer.service';
import { Vocabulum } from '../../models/vocabulum.interface';
import { QuizState } from '../../services/single-choice.service';

@Component({
  selector: 'app-written-answer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChartModule],
  templateUrl: './written-answer.component.html',
  styleUrls: ['./written-answer.component.scss'],
})
export class WrittenAnswerComponent implements OnInit {
  public isCorrectAnswer!: Signal<boolean>;

  public latinWord!: Signal<Vocabulum | null>;

  public isFormSubmitted: WritableSignal<boolean> = signal(false);

  public showResult!: Signal<boolean>;

  public results!: Signal<QuizState[]>;

  public questionText = 'Translate the following word into Latin:';

  public data!: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      hoverBackgroundColor: string[];
    }[];
  };

  public options!: {
    plugins: { legend: { labels: { usePointStyle: boolean; color: string } } };
  };

  constructor(public service: WrittenAnswerService) {}

  ngOnInit() {
    this.isCorrectAnswer = this.service.isCorrectAnswer;
    this.showResult = this.service.showResult;
    this.latinWord = this.service.latWord;
    this.results = this.service.quizState;

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['correct', 'incorrect'],
      datasets: [
        {
          data: [
            this.service.quizState().filter((answer) => answer.match).length,
            this.service.quizState().filter((answer) => !answer.match).length,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
