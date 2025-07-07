import { Community, Post } from '../shared/models/models';

export const GetPostsResponse: Post[] = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    title: 'AI Green Introduces Article Of Impeachment For Trump',
    content: `The Shiba Inu is the smallest of the six original and distinct
        spitz breeds of dog from Japan. A small, agile dog that copes very
        well with mountainous terrain, the Shiba Inu was originally bred
        for hunting.`,
    postType: 'text',
    authorId: '98faa7e0-bcd0-427c-8822-672e68118c96',
    likeCount: 120,
    commentCount: 5,
    createdAt: new Date(),
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    title: 'The Future of AI in Healthcare',
    content: `Artificial intelligence is revolutionizing healthcare by improving
        diagnostics, personalizing treatment plans, and enhancing patient care.`,
    postType: 'text',
    authorId: 'b7c3d2f1-9e4d-4a6b-8e3a-1c2d3f4e5a6b',
    likeCount: 85,
    commentCount: 12,
    createdAt: new Date(),
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    title: 'Top 10 Programming Languages in 2023',
    content: `Discover the most popular programming languages in 2023, including
        Python, JavaScript, and Rust, and their applications in modern software development.`,
    postType: 'text',
    authorId: 'c3d2f1b7-9e4d-4a6b-8e3a-1c2d3f4e5a6b',
    likeCount: 200,
    commentCount: 30,
    createdAt: new Date(),
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    title: 'Exploring Quantum Computing',
    content: `Quantum computing is set to transform industries by solving problems
        that are impossible for classical computers to handle.`,
    postType: 'text',
    authorId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    likeCount: 150,
    commentCount: 20,
    createdAt: new Date(),
  },

  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    title: 'Exploring Quantum Computing',
    content: `Quantum computing is set to transform industries by solving problems
        that are impossible for classical computers to handle.`,
    postType: 'text',
    authorId: 'd4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9',
    likeCount: 150,
    commentCount: 20,
    createdAt: new Date(),
  },
  
];

export const GetCommentsResponse = [
  {
    id: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
    postId: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    authorId: '3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b',
    content: 'This is a comment on the post.',
    createdAt: new Date(),
    voteCount: 10,
  },
  {
    id: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
    postId: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    authorId: 'e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0',
    content: 'Great insights on AI in healthcare!',
    createdAt: new Date(),
    voteCount: 25,
  },
  {
    id: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
    postId: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    authorId: 'f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1',
    content: 'Python is definitely my favorite programming language.',
    createdAt: new Date(),
    voteCount: 40,
  },
  {
    id: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
    postId: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    authorId: 'g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2',
    content: 'Quantum computing is fascinating!',
    createdAt: new Date(),
    voteCount: 15,
  },
];
export const GetCommunitiesByPopularityResponse: Community[] = [
  {
    name: 'AI Enthusiasts',
    description: 'A community for those passionate about artificial intelligence.',
    memberCount: 1500,
    createdAt: new Date(),
  },
  {
    name: 'Web Developers',
    description: 'Discuss the latest in web development, frameworks, and best practices.',
    memberCount: 3200,
    createdAt: new Date(),
  },
  {
    name: 'Data Science Central',
    description: 'A hub for data scientists and machine learning practitioners.',
    memberCount: 2800,
    createdAt: new Date(),
  },
  {
    name: 'Gamers United',
    description: 'For everyone who loves video games, from casual to pro.',
    memberCount: 4100,
    createdAt: new Date(),
  },
  {
    name: 'Book Lovers',
    description: 'Share and discuss your favorite books and authors.',
    memberCount: 1700,
    createdAt: new Date(),
  },
  {
    name: 'Fitness Freaks',
    description: 'A place for fitness tips, routines, and motivation.',
    memberCount: 2300,
    createdAt: new Date(),
  },
  {
    name: 'Travel Addicts',
    description: 'Share travel stories, tips, and bucket lists.',
    memberCount: 1950,
    createdAt: new Date(),
  },
  {
    name: 'Movie Buffs',
    description: 'Discuss the latest movies, classics, and everything in between.',
    memberCount: 2600,
    createdAt: new Date(),
  },
  {
    name: 'Crypto Corner',
    description: 'All about cryptocurrency, blockchain, and digital assets.',
    memberCount: 3400,
    createdAt: new Date(),
  },
  {
    name: 'Photography World',
    description: 'For photographers of all levels to share and learn.',
    memberCount: 1500,
    createdAt: new Date(),
  },
  {
    name: 'Music Makers',
    description: 'A community for musicians, producers, and music lovers.',
    memberCount: 2100,
    createdAt: new Date(),
  },
  {
    name: 'Parenting Tips',
    description: 'Advice and support for parents and caregivers.',
    memberCount: 1200,
    createdAt: new Date(),
  },
  {
    name: 'Foodies',
    description: 'Share recipes, restaurant reviews, and food pics.',
    memberCount: 2750,
    createdAt: new Date(),
  },
  {
    name: 'Pet Lovers',
    description: 'A place for pet owners to share stories and advice.',
    memberCount: 1800,
    createdAt: new Date(),
  },
  {
    name: 'Investing Insights',
    description: 'Discuss stocks, markets, and personal finance.',
    memberCount: 2200,
    createdAt: new Date(),
  },
  {
    name: 'Science Geeks',
    description: 'For those who love science, experiments, and discoveries.',
    memberCount: 1600,
    createdAt: new Date(),
  },
  {
    name: 'History Buffs',
    description: 'Explore and discuss historical events and figures.',
    memberCount: 1100,
    createdAt: new Date(),
  },
  {
    name: 'Anime & Manga',
    description: 'Talk about your favorite anime and manga series.',
    memberCount: 2450,
    createdAt: new Date(),
  },
  {
    name: 'Coding Challenges',
    description: 'Sharpen your coding skills with daily challenges.',
    memberCount: 2000,
    createdAt: new Date(),
  },
  {
    name: 'Sustainable Living',
    description: 'Tips and discussions on eco-friendly living.',
    memberCount: 900,
    createdAt: new Date(),
  }]