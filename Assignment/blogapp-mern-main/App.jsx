import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header onSearchChange={setSearchTerm} searchTerm={searchTerm} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog searchTerm={searchTerm} />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;