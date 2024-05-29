import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (keyword: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('SearchForm handleSubmit called with keyword:', keyword); // デバッグ用
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
        className="border p-2 text-black"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">Search</button>
    </form>
  );
};

export default SearchForm;
