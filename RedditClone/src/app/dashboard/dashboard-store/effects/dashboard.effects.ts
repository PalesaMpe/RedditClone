import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  GetCommunitiesByPopularityAction,
  GetCommunitiesByPopularityPayloadAction,
  getPostsAction,
  getPostsFailureAction,
  getPostsPayloadAction,
} from '../actions/dashboard.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { ContentService } from '../../../core/content.service';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private contentService: ContentService) {}

  postsEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostsAction),
      exhaustMap(() =>
        this.contentService.getPosts().pipe(
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

  communitiesByPopularityEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCommunitiesByPopularityAction),
      switchMap(action =>
        this.contentService.getCommunitiesByPopularity(action.size).pipe(
          map((communities) => {
            return GetCommunitiesByPopularityPayloadAction({ communities: communities });
          }),
          catchError((error) => {
            return of(error);//proper error handling to do
          })
        )
      )
    )
  );
}
