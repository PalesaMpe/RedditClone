import { Community, Post } from '../../../shared/models/models';

export interface DashboardState {
  posts: Post[];
  popularCommunities: Community[]; 
  isLoading: boolean;
  isInErrorState: boolean;
  error: {
    title: string;
    errorDescription: string;
  };
}
