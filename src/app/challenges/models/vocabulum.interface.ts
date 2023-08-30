export interface Vocabulum {
  id: string;
  word: string;
  vocabForm: {
    NomSg: string;
    GenSg: string;
    NomPl: string;
    GenPl: string;
  };
  translation: string;
}
