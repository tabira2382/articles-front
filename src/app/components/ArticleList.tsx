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
        const sortedArticles = articlesData.sort((a: Article, b: Article) => b.article_like_count - a.article_like_count);
        setArticles(sortedArticles);
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
        if (Number(article.id) === articleId) {
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
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">記事一覧</h1>
      <div className="flex flex-col gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-row items-center">
            <img src={article.image_url} alt={article.title} className="w-1/4 h-48 object-cover mb-4 rounded mr-4" />  {/* アイキャッチ画像を表示 */}
            <div className="w-3/4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-2">Tags: {article.tag_list}</p>
              <p className="text-gray-600 mb-2">Likes: {article.likes_count}</p>
              <p className="text-gray-600 mb-2">Article Likes: {article.article_like_count}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
