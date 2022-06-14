import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataSve:ApiService) { }

  dataResults: any[]=[];


// 一開始網頁就要出現的資料
  ngOnInit(): void {
    this.dataSve.discoverMovieReleaseDate().subscribe(data => {
      console.log("API回傳的資料",data)

      // 把 API 傳回來的資料存到 dataResults
      this.dataResults = Object.values(data)[1]
      console.log("根據日期排序的",this.dataResults)
    })

  }

}


