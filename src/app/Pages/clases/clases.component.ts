import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {

  isOpenFilter = false;
  isOpenOptionsTable = false;
  isOpenOptionsPages = false;

  constructor() { }

  ngOnInit(): void {
  }

}
