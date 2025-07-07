import { createAction, props } from '@ngrx/store';
import { Community, Post } from '../../../shared/models/models';

export const getPostsAction = createAction('[DASHBOARD] Get Posts');
export const getPostsPayloadAction = createAction(
  '[DASHBOARD] Get Posts Success',
  props<{ posts: Post[] }>()
);
export const getPostsFailureAction = createAction(
  '[DASHBOARD] Get Posts Failed',
  props<{ error: any }>()
);

export const GetCommunitiesByPopularityAction = createAction(
  '[DASHBOARD] Get Communities By Popularity', props<{ size: number }>());
export const GetCommunitiesByPopularityPayloadAction = createAction(
  '[DASHBOARD] Get Communities By Popularity Success', props<{ communities: Community[] }>());