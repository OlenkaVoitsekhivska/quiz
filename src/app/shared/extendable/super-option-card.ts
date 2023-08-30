import { Component, Input } from '@angular/core';
import { Vocabulum } from 'src/app/challenges/models/vocabulum.interface';
import { Language } from 'src/app/core/models/language.enum';

@Component({
  template: '',
})
export default class SuperOptionCard {
  @Input() option!: Vocabulum;
  @Input() language: Language = Language.LAT;

  public get text() {
    return this.language === Language.LAT
      ? this.option.word
      : this.option.translation;
  }
}
