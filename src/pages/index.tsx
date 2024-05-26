import Link from 'next/link';
import Layout from '../app/components/Layout';
import ArticleList from '../app/components/ArticleList';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ArticleList />
    </Layout>
  );
};

export default HomePage;
