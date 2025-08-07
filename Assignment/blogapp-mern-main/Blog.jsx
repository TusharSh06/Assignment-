import { useState, useMemo } from 'react';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import { blogPosts, categories } from '../data/blogPosts';
import './Blog.css';

const Blog = ({ searchTerm }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Blog Articles</h1>
          <p className="blog-description">
            Explore our collection of articles covering the latest trends, tutorials, 
            and insights in web development and technology.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {searchTerm && (
          <div className="search-results">
            <p>
              {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''} 
              {searchTerm && ` for "${searchTerm}"`}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="no-posts">
            <h3>No articles found</h3>
            <p>
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;