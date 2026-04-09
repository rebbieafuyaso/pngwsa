import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import NewsBlogs from './pages/NewsBlogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<NewsBlogs />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;