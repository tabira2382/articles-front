import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { fetchArticles, likeArticle } from '@/lib/api';
import { Article } from '../../articles';


const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articlesData = await fetchArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error('Failed to fetch articles', error);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  const handleLike = async (articleId: number) => {
    try {
      const response = await likeArticle(articleId);
      setArticles(articles.map(article => {
        if (article.id === articleId) {
          return {
            ...article,
            likes_count: response.likes_count
          };
        }
        return article;
      }));
    } catch (error) {
      console.error('Failed to like article', error);
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Article List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-2">Tags: {article.tag_list}</p>
            <p className="text-gray-600 mb-2">Likes: {article.likes_count}</p>
            <button
              onClick={() => handleLike(article.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              {article.likes_count > 0 ? 'Unlike' : 'Like'}
            </button>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
