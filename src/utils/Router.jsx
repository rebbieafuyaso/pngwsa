import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NewsBlogs from '../pages/NewBlogs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/newsblogs',
    element: <NewsBlogs />
  }
]);

export default router;