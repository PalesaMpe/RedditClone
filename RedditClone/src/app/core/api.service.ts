import { Injectable } from '@angular/core';
import { Api } from './api';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {
  posts!: Api<any>;
  constructor(private httpClient: HttpClient) {
    this.initialiseApis('');
  }

  private initialiseApis(baseApiUrl: string) {
    this.posts = new Api<any>(this.httpClient, `${baseApiUrl}/posts`);
  }
}
