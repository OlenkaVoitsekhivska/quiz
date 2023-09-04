//angular
import { Injectable } from '@angular/core';

//app
import { mockVocabula } from 'src/app/core/data/mockVocabula';

@Injectable({
  providedIn: 'root',
})
export class RandomizerService {
  public buildRandomizedIdxArray(): number[] {
    const arry: number[] = [];
    while (arry.length < mockVocabula.length) {
      const idx = Math.floor(Math.random() * mockVocabula.length);
      if (!arry.includes(idx)) {
        arry.push(idx);
      }
    }
    return arry;
  }
}
