import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/i-word';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
iWord: IWord;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const word = paramMap.get('word');
      this.iWord = this.dictionaryService.translate(word);
    });
  }

}
