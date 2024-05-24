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

export const fetchArticles = async () => {
  const response = await api.get('/articles/api/articles/', {
    headers: getAuthHeaders()
  });
  return response.data;
}

export const login = async (username: string, password: string) => {
  const response = await api.post('/articles/api/auth/login/', {
    username,
    password
  });
  return response.data;
}
