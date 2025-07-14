// App.jsx
import LayOut from './LayOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './components/Posts';
import BlogPost from './components/posts/BlogPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
