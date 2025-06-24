import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getPostsAction,
  getPostsFailureAction,
  getPostsPayloadAction,
} from '../actions/dashboard.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { PostService } from '../../../core/post.service';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private postService: PostService) {}

  postsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsAction),
      exhaustMap(() =>
        this.postService.getPosts().pipe(
          map((posts) => {
            return getPostsPayloadAction({ posts });
          }),
          catchError((error) => {
            return of(getPostsFailureAction({ error }));
          })
        )
      )
    )
  );
}
