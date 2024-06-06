import { useState } from 'react';
import SearchForm from '@/app/components/SearchForm';
import SearchList from '@/app/components/SearchList';
import { searchArticles } from '@/lib/api';
import Layout from '../app/components/Layout';


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
      <Layout>
        <div className="flex justify-center">
          <SearchForm onSearch={handleSearch} />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <SearchList articles={articles} />
      </Layout>
    </div>
  );
};

export default SearchPage;
