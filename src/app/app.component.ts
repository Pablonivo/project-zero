import { Component } from '@angular/core';
import { ProjectEulerHelper } from './project-euler-helper/project-euler-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(readonly projectEulerHelper: ProjectEulerHelper) {

  }

  title = 'project-zero';
  problemIdTitleDictionary: ProblemTitle[] = [
    {id: 1, title: 'Multiples of 3 and 5'},
    {id: 2, title: 'Even Fibonacci numbers'},
    {id: 3, title: 'Largest prime factor'},
    {id: 4, title: 'Largest palindrome product'}
  ]
}

export class ProblemTitle {
  id: number;
  title: string;
}
