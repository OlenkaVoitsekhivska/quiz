import { Component, Input } from '@angular/core';
import { Vocabulum } from '../../../challenges/models/vocabulum.interface';
import { SingleChoiceService } from '../../../challenges/services/single-choice.service';
import { HighlightDirective } from '../../../challenges/directives/highlight.directive';
import { Language } from 'src/app/core/models/language.enum';
import SuperOptionCard from '../../extendable/super-option-card';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  hostDirectives: [HighlightDirective],
})
export class OptionCardComponent extends SuperOptionCard {
  constructor(private singleChoiceService: SingleChoiceService) {
    super();
  }

  handleSelectedOption() {
    this.singleChoiceService.updateSelectOption(this.option);
  }
}
