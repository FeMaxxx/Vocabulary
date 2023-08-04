export interface VocabularyWordI {
  _id?: string;
  word: string;
  translate: string[];
  addedAt: Date;
}

export interface WordI extends VocabularyWordI {
  canByConfirmed: Date;
}

export interface WordsI {
  firstLvl: WordI[];
  secondLvl: WordI[];
  thirdLvl: WordI[];
  user: string;
  vocabulary: VocabularyWordI[];
}
