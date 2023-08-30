import { Component, Signal } from '@angular/core';
import { Vocabulum } from '../models/vocabulum.interface';
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragCasesService } from '../services/drag-cases.service';

@Component({
  selector: 'app-cases-drag',
  templateUrl: './cases-drag.component.html',
  styleUrls: ['./cases-drag.component.scss'],
})
export class CasesDragComponent {
  caseFormsArray!: Signal<string[]>;

  NomSg = [];
  GenSg = [];
  NomPl = [];
  GenPl = [];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(private service: DragCasesService) {}

  ngOnInit() {
    this.caseFormsArray = this.service.caseFormsArray;
  }
}
