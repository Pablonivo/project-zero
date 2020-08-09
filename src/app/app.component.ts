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
}
