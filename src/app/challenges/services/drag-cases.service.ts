//angular
import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
} from '@angular/core';

//app
import { RandomizerService } from './randomizer.service';
import { Vocabulum } from '../models/vocabulum.interface';
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import { Cases } from '../models/cases';

interface State {
  [caseName: string]: string | null;
}

export interface QuizState {
  id: string;
  expected: {
    [key in Cases]: string;
  };
  actual: {
    [key in Cases]: string;
  };
  match: {
    [key in Cases]: boolean;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DragCasesService {
  public latWord: WritableSignal<Vocabulum | null> = signal(null);
  public currentIndex: WritableSignal<number> = signal(0);
  public gameState: WritableSignal<State> = signal({
    NomSg: null,
    GenSg: null,
    NomPl: null,
    GenPl: null,
  });

  public quizState: WritableSignal<QuizState[]> = signal([]);
  public randomizedIdxArray: WritableSignal<number[]> = signal([]);

  public caseFormsArray: Signal<string[]> = computed(() => {
    const arry: string[] = [];
    const obj = this.latWord()?.vocabForm as { [id: string]: string };
    for (const key in obj) {
      const value = obj[key];
      arry.push(value);
    }
    return arry;
  });

  public isSubmitBtnDisabled: Signal<boolean> = computed(() => {
    const valArray = [];
    for (const key in this.gameState()) {
      valArray.push(this.gameState()[key]);
    }
    return valArray.every((val) => !!val);
  });

  public shouldProcessUserAnswer: WritableSignal<boolean> = signal(false);
  public showResult: WritableSignal<boolean> = signal(false);

  constructor(private randomizer: RandomizerService) {
    this.randomizedIdxArray.set(this.randomizer.buildRandomizedIdxArray());

    effect(
      () => {
        this.play();
      },
      { allowSignalWrites: true }
    );
  }

  public updateGameState(caseForm: string | null, casusId: string): void {
    let caseList: string;

    if (casusId.includes('1')) {
      caseList = Cases.NomSg;
    } else if (casusId.includes('2')) {
      caseList = Cases.GenSg;
    } else if (casusId.includes('3')) {
      caseList = Cases.NomPl;
    } else {
      caseList = Cases.GenPl;
    }
    this.gameState.update((state) => ({
      ...state,
      [caseList]: caseForm,
    }));
  }

  public updateState() {
    this.shouldProcessUserAnswer.update((state) => !state);
  }

  private play() {
    const idx = this.currentIndex();
    if (mockVocabula[idx]) {
      this.latWord.set(mockVocabula[idx]);

      if (this.shouldProcessUserAnswer()) {
        const key = this.latWord()?.id as string;
        this.quizState.update((state) => {
          const incomingUpd = {
            id: key,
            expected: {
              [Cases.NomSg]: this.caseFormsArray()[0],
              [Cases.GenSg]: this.caseFormsArray()[1],
              [Cases.NomPl]: this.caseFormsArray()[2],
              [Cases.GenPl]: this.caseFormsArray()[3],
            },
            actual: {
              [Cases.NomSg]: this.gameState()[Cases.NomSg]!,
              [Cases.GenSg]: this.gameState()[Cases.GenSg]!,
              [Cases.NomPl]: this.gameState()[Cases.NomPl]!,
              [Cases.GenPl]: this.gameState()[Cases.GenPl]!,
            },
            match: {
              [Cases.NomSg]:
                this.caseFormsArray()[0] === this.gameState()[Cases.NomSg],
              [Cases.GenSg]:
                this.caseFormsArray()[1] === this.gameState()[Cases.GenSg],
              [Cases.NomPl]:
                this.caseFormsArray()[2] === this.gameState()[Cases.NomPl],
              [Cases.GenPl]:
                this.caseFormsArray()[3] === this.gameState()[Cases.GenPl],
            },
          };
          return [...state, incomingUpd];
        });
        console.log('GAME STATE', this.quizState());
        this.updateState();
        this.currentIndex.update((idx) => (idx += 1));
      }
    } else {
      this.showResult.update((showResult) => !showResult);
    }
  }
}
