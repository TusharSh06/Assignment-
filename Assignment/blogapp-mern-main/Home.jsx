import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import './Home.css';

const Home = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span>TechBlog</span>
          </h1>
          <p className="hero-description">
            Discover the latest insights, tutorials, and trends in web development. 
            Stay ahead of the curve with our expert articles and in-depth guides.
          </p>
          <Link to="/blog" className="hero-cta">
            Explore Articles
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            alt="Developer workspace"
          />
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-section">
        <div className="section-header">
          <h2 className="section-title">Featured Articles</h2>
          <p className="section-description">
            Our most popular and insightful articles, handpicked just for you.
          </p>
        </div>
        
        <div className="featured-grid">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} featured />
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="latest-section">
        <div className="section-header">
          <h2 className="section-title">Latest Articles</h2>
          <Link to="/blog" className="see-all-link">
            See all articles →
          </Link>
        </div>
        
        <div className="latest-grid">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated</h2>
          <p className="newsletter-description">
            Get the latest articles and tutorials delivered directly to your inbox.
            Join our community of developers and tech enthusiasts.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;