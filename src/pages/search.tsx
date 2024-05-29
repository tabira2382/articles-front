import { useState } from 'react';
import SearchForm from '@/app/components/SearchForm';
import SearchList from '@/app/components/SearchList';
import { searchArticles } from '@/lib/api';

const SearchPage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (keyword: string) => {
    console.log('handleSearch called with keyword:', keyword); // デバッグ用
    setError(null);  // エラーメッセージをリセット
    try {
      const data = await searchArticles(keyword);
      console.log('searchArticles response:', data); // デバッグ用
      setArticles(data);
    } catch (err) {
      setError('Failed to fetch articles');
      console.error(`Error fetching articles: ${err}`);
    }
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchForm onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <SearchList articles={articles} />
    </div>
  );
};

export default SearchPage;
