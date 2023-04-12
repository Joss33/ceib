import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html'
})
export class SiderbarComponent implements OnInit {

  stateSiderbar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
