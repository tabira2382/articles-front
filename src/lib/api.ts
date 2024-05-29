import axios from 'axios';

const API_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
});

// トークンをヘッダーに追加するヘルパー関数
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      Authorization: `Token ${token}`
    };
  }
  return {};
};

// 一覧画面
export const fetchArticles = async () => {
  const response = await api.get('/articles/api/articles/', {
    headers: getAuthHeaders()
  });
  return response.data;
}

// ログイン
export const login = async (username: string, password: string) => {
  const response = await api.post('/articles/api/auth/login/', {
    username,
    password
  });
  return response.data;
}

// 新規登録
export const register = async (username: string, email: string, password: string) => {
  const response = await api.post('/articles/api/auth/register/', {
    username,
    email,
    password
  });
  return response.data
}

// いいね登録
export const likeArticle = async (articleId: number) => {
  const response = await api.post('/articles/api/like/', {
    article_id: articleId
  }, {
    headers: getAuthHeaders()
  });
  return response.data;
}

// プロフィール情報
export const fetchUserProfile = async () => {
  const response = await api.get('articles/api/profile/', {
    headers: getAuthHeaders()
  });
  return response.data;
};

// 検索機能
export const searchArticles = async (keyword: string) => {
  console.log('searchArticles called with keyword:', keyword); // デバッグ用
  const response = await api.get(`/articles/api/search/?keyword=${encodeURIComponent(keyword)}`, {
    headers: getAuthHeaders()
  });
  console.log('API response:', response); // デバッグ用
  return response.data;
};