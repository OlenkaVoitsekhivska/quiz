import { Component, Input } from '@angular/core';
import SuperOptionCard from '../../extendable/super-option-card';
import { MatchService } from 'src/app/challenges/services/match.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent extends SuperOptionCard {
  @Input() public column: '1' | '2' = '1';

  constructor(private matchService: MatchService) {
    super();
  }

  public handleSelect() {
    this.matchService.updateMatchColumn(this.option, this.column);
  }
}
