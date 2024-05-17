import axios from 'axios';
import { Article } from '../types/articles';

const API_URL = 'http://localhost:8000/articles/api/articles/';

export const fetchArticles = async(): Promise<Article[]> => {
  const response = await axios.get<Article[]>(API_URL);
  return response.data;
}