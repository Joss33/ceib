import { Component, OnInit } from '@angular/core';
import { GlobalService } from '@core/services/global.service';
import { environment } from '@env';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  isOpenFilter = false;
  isOpenOptionsTable = false;
  isOpenOptionsPages = false;

  list: any[] = [];

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.globalService.get(environment.API_URL + '/cours/getList').subscribe(
      {
        next: (res)=>{
          console.log(res);
        }
      }
    )
  }

}
