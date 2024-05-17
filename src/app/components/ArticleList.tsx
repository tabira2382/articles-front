import Ract, { useEffect, useState } from 'react';
import { fetchArticles } from '@/lib/api';
import { Article } from '../types/article';

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const articles = await fetchArticles();
        setArticles(articles);
      } catch (error) {
        console.error('Failed to fetch articles', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return(
    <div>
      <h1>Article List</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>Tags: {article.tag_list}</p>
            <p>Likes: {article.likes_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;