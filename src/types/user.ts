import { Article } from '../articles';

export interface UserProfile {
  user: {
    id: string;
    username: string;
    email: string;
  };
  liked_articles: Article[];
}
