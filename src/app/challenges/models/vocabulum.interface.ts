import { Cases } from './cases';

export interface Vocabulum {
  id: string;
  word: string;
  vocabForm: {
    [Cases.NomSg]: string;
    [Cases.GenSg]: string;
    [Cases.NomPl]: string;
    [Cases.GenPl]: string;
  };
  translation: string;
}
