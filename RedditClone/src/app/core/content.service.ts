import { Observable, of } from 'rxjs';
import { Community, Post } from '../shared/models/models';
import { ApiService } from './api.service';
import { GetCommunitiesByPopularityResponse, GetPostsResponse } from '../dashboard/dashboard-mock';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  getPosts(): Observable<Post[]> {
    // return this.apiService.posts.getAll();
    return of(GetPostsResponse);
  }
    getCommunitiesByPopularity(size:number): Observable<Community[]> {
    return of(GetCommunitiesByPopularityResponse.slice(0, size));
  }
}
