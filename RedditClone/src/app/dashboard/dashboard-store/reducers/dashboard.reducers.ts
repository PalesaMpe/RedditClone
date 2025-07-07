import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../state/dashboard.state';
import {
  GetCommunitiesByPopularityAction,
  GetCommunitiesByPopularityPayloadAction,
  getPostsAction,
  getPostsFailureAction,
  getPostsPayloadAction,
} from '../actions/dashboard.actions';

const initialState: DashboardState = {
  posts: [],
  popularCommunities: [],
  isLoading: false,
  isInErrorState: false,
  error: {
    title: '',
    errorDescription: '',
  },
};
export const dashboardReducer = createReducer(
  initialState,
  on(getPostsAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getPostsPayloadAction, (state, { posts }) => ({
    ...state,
    posts: posts,
    isLoading: false,
  })),
  on(getPostsFailureAction, (state, { error }) => ({
    ...state,
    isloading: false,
    isInErrorState: true,
    error: {
      title: error.title || 'Error',
      errorDescription:
        error.errorDescription || 'An unexpected error occurred.',
    },
  })),
  on(GetCommunitiesByPopularityAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(GetCommunitiesByPopularityPayloadAction, (state, { communities }) => ({
    ...state,
    popularCommunities: communities,
    isLoading: false,
  }))
);
