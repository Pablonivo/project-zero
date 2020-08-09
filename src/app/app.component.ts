import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectEulerHelper } from './project-euler-helper/project-euler-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(readonly projectEulerHelper: ProjectEulerHelper) {

  }

  idSelectedProblem: number = 0;
  title = 'project-zero';
  projectEulerProblemDictionary: ProjectEulerProblem[] = [
    {id: 1, title: 'Multiples of 3 and 5', description: 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.'},
    {id: 2, title: 'Even Fibonacci numbers', description: 'Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.'},
    {id: 3, title: 'Largest prime factor', description: 'The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?'},
    {id: 4, title: 'Largest palindrome product', description: 'A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.'}
  ]

  getDescriptionById(id: number): string {
    return this.projectEulerProblemDictionary.find(problem => problem.id === id).description;
  }

  getSolutionById(id: number): number | string {
    switch(id){
      case 1:
        return this.projectEulerHelper.solutionOfProblem1;
      case 2:
        return this.projectEulerHelper.solutionOfProblem2;
      case 3:
        return this.projectEulerHelper.solutionOfProblem3;
      case 4:
        return "TODO: In progress";
      default:
        return "No problem selected";
    }
  }

  showResultById(id: number): string {
    switch(id){
      case 1:
      case 2:
      case 3: return `${this.getSolutionById(id)} (computed in ${this.projectEulerHelper._numberOfMillisecondsUsedForLastComputation} ms)`
      default: return this.getSolutionById(id).toString();
    }
  }
}

export class ProjectEulerProblem {
  id: number;
  title: string;
  description: string;
}
