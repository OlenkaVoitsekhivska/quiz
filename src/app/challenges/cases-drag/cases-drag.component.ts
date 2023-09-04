//angular
import { Component, OnInit, Signal } from '@angular/core';

//third-party
import {
  CdkDragDrop,
  DragRef,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

//app
import { DragCasesService, QuizState } from '../services/drag-cases.service';
import { ButtonType } from 'src/app/core/models/button-type';

@Component({
  selector: 'app-cases-drag',
  templateUrl: './cases-drag.component.html',
  styleUrls: ['./cases-drag.component.scss'],
})
export class CasesDragComponent implements OnInit {
  public caseFormsArray!: Signal<string[]>;

  public isSubmitBtnEnabled!: Signal<boolean>;

  public showResult!: Signal<boolean>;

  public results!: Signal<QuizState[]>;

  public submitBtnLabel = 'submit';

  public submitBtnType: ButtonType = ButtonType.BUTTON;

  //droppable containers
  public NomSg = [];
  public GenSg = [];
  public NomPl = [];
  public GenPl = [];

  public questionText = 'Match the following case names and case forms:';

  constructor(private service: DragCasesService) {}

  ngOnInit() {
    this.caseFormsArray = this.service.caseFormsArray;
    this.isSubmitBtnEnabled = this.service.isSubmitBtnDisabled;
    this.showResult = this.service.showResult;
    this.results = this.service.quizState;
  }

  public assessAnswer() {
    this.service.updateState();
    this.NomSg.length = 0;
    this.GenSg.length = 0;
    this.NomPl.length = 0;
    this.GenPl.length = 0;
  }

  public drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (event.container.id === 'cdk-drop-list-0') {
        this.service.updateGameState(null, event.previousContainer.id);
      } else {
        this.service.updateGameState(
          event.container.data[0],
          event.container.id
        );
      }
    }
  }
}
