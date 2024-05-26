export interface Article {
  id: string;
  title: string;
  url: string;
  tag_list: string;
  likes_count: number;
  image_url?: string;
}