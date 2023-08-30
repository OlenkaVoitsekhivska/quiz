import {
  Injectable,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { Vocabulum } from '../models/vocabulum.interface';
import { single } from 'rxjs';
import { mockVocabula } from 'src/app/core/data/mockVocabula';

interface State {
  NomSg: string | null;
  GenSg: string | null;
  NomPl: string | null;
  GenPl: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class DragCasesService {
  latWord: WritableSignal<Vocabulum | null> = signal(null);
  gameState: WritableSignal<State> = signal({
    NomSg: null,
    GenSg: null,
    NomPl: null,
    GenPl: null,
  });

  caseFormsArray: Signal<string[]> = computed(() => {
    const arry: string[] = [];
    const obj = this.latWord()?.vocabForm as { [id: string]: string };
    for (let key in this.latWord()?.vocabForm) {
      const value = obj[key];
      arry.push(value);
    }
    return arry;
  });

  constructor() {
    this.setNewWord();
  }

  setNewWord() {
    const randomIdx = Math.floor(Math.random() * mockVocabula.length);
    this.latWord.set(mockVocabula[randomIdx]);
  }

  convertToCaseformArray() {}
}
