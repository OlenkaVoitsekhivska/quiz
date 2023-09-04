import { Component } from '@angular/core';
import { SingleChoiceService } from '../../../challenges/services/single-choice.service';
import SuperOptionCard from '../../extendable/super-option-card';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
})
export class OptionCardComponent extends SuperOptionCard {
  constructor(private singleChoiceService: SingleChoiceService) {
    super();
  }

  public handleSelectedOption() {
    this.singleChoiceService.updateSelectOption(this.option);
  }
}
