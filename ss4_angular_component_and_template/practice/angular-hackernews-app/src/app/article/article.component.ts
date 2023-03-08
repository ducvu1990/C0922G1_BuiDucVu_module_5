import {Component, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'Sự phát triển của Async javascript: từ Callback, đến Promises, đến Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Tại sao bạn chỉ cần thử nghiệm với 5 nguời dùng',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Hãy xây dựng một máy chử web, phần 1',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    },
  ];

  addNewArticle() {
    this.articles.push(this.article);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
