//angular
import { Component, Signal } from '@angular/core';

//app
import { MatchService } from 'src/app/challenges/services/match.service';
import { Vocabulum } from 'src/app/challenges/models/vocabulum.interface';
import { Language } from 'src/app/core/models/language.enum';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent {
  //signals
  public latOptions!: Signal<Vocabulum[]>;

  public shuffledTranslations!: Signal<Vocabulum[]>;

  //interfaces & enums:
  public language = Language;

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.latOptions = this.matchService.originalWordArray;
    this.shuffledTranslations = this.matchService.shuffledWordArray;
  }
}
