import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
API_KEY = 'api_key=d9199749d81d20b03754505e12076dd9';
BASE_URL = 'https://api.themoviedb.org/3';
BASE_LANGUAGE = 'language=zh-TW'

constructor(private httpClient:HttpClient) { }

  //發布日期排序
  // https://api.themoviedb.org/3/discover/movie?api_key=d9199749d81d20b03754505e12076dd9&language=zh-TW&sort_by=release_date.desc
  discoverMovieReleaseDate() {
    return this.httpClient.get(`${this.BASE_URL}/discover/movie?${this.API_KEY}&${this.BASE_LANGUAGE}&sort_by=release_date.desc`);
  }

  //人氣排序
  // https://api.themoviedb.org/3/discover/movie?api_key=d9199749d81d20b03754505e12076dd9&language=zh-TW&sort_by=popularity.desc
  discoverMoviePopularity() {
  return this.httpClient.get(`${this.BASE_URL}/discover/movie?${this.API_KEY}&${this.BASE_LANGUAGE}&sort_by=popularity.desc`);
  }

}
