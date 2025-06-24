import { Observable, of } from 'rxjs';
import { Post } from '../shared/models/models';
import { ApiService } from './api.service';
import { GetPostsResponse } from '../dashboard/dashboard-mock';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  getPosts(): Observable<Post[]> {
    // return this.apiService.posts.getAll();
    return of(GetPostsResponse);
  }
}
