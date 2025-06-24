import { Post } from '../../../shared/models/models';

export interface DashboardState {
  posts: Post[];
  isLoading: boolean;
  isInErrorState: boolean;
  error: {
    title: string;
    errorDescription: string;
  };
}
