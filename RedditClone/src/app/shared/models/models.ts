export interface Post {
  id: string;
  title: string;
  content: string;
  postType: 'text' | 'image' | 'video';
  authorId: string;
  likeCount: number;
  commentCount: number;
  createdAt: Date;
}

export interface Community{

  name: string;
  description: string;
  memberCount: number;
  createdAt: Date;
}
