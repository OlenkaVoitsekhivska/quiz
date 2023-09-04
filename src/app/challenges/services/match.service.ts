//angular
import { Injectable, WritableSignal, signal } from '@angular/core';

//app
import { mockVocabula } from 'src/app/core/data/mockVocabula';
import { Vocabulum } from '../models/vocabulum.interface';

interface matchState {
  [latId: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  public matchState: WritableSignal<matchState> = signal({});

  public originalWordArray: WritableSignal<Vocabulum[]> = signal(mockVocabula);

  public shuffledWordArray: WritableSignal<Vocabulum[]> = signal([]);

  private intermediateMatchSet: WritableSignal<matchState> = signal({});

  constructor() {
    this.shuffleArrayElements();
  }

  public updateMatchColumn(word: Vocabulum, column: '1' | '2') {
    if (column === '1') {
      this.intermediateMatchSet.update(() => ({
        [word.id]: '',
      }));
    } else {
      const currentlatId = Object.keys(this.intermediateMatchSet())[0];
      this.intermediateMatchSet.update(() => ({
        [currentlatId]: word.id,
      }));
    }
    if (
      Object.keys(this.intermediateMatchSet()).length > 0 &&
      Object.values(this.intermediateMatchSet())[0] !== ''
    ) {
      this.matchState.update((state) => ({
        ...state,
        ...this.intermediateMatchSet(),
      }));

      const latinWordId = Object.keys(this.intermediateMatchSet())[0];
      const translationId = Object.values(this.intermediateMatchSet())[0];

      this.originalWordArray.update((state) =>
        state.filter((word) => word.id !== latinWordId)
      );

      this.shuffledWordArray.update((state) =>
        state.filter((word) => word.id !== translationId)
      );
    }
  }

  private shuffleArrayElements() {
    const copy = [...mockVocabula];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    this.shuffledWordArray.set(copy);
  }
}
