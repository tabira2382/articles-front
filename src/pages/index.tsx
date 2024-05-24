import Link from 'next/link';
import ArticleList from '../app/components/ArticleList';

const HomePage: React.FC = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <ArticleList />
    </div>
  );
};

export default HomePage;
