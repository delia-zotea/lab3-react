import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Recipe from '@/pages/Recipe';
import About from '@/pages/About';
import Header from '@/components/Header';
import './App.module.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
