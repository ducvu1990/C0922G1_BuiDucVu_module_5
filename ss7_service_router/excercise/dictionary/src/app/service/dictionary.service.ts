import {Injectable} from '@angular/core';
import {IWord} from '../model/i-word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  iWords: IWord[] = [
    {
      word: 'yellow',
      mean: 'màu vàng'
    },
    {
      word: 'red',
      mean: 'màu đỏ'
    },
    {
      word: 'green',
      mean: 'màu xanh'
    }
  ];

  constructor() {
  }

  translate(word: string) {
    return this.iWords.find(item => item.word === word);
  }

  getAll() {
    return this.iWords;
  }
}
