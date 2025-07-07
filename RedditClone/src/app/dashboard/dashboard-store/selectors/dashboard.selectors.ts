import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../state/dashboard.state';

const dashboardStateFeature =
  createFeatureSelector<DashboardState>('Dashboard');

export const state = createSelector(
  dashboardStateFeature,
  (state: DashboardState) => state
);

export const selectPosts = createSelector(
  dashboardStateFeature,
  (state: DashboardState) => state.posts
);
