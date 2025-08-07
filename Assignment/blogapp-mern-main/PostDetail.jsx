import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import './PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="post-not-found">
        <div className="not-found-content">
          <h1>Post Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="back-link">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="post-detail">
      <div className="post-container">
        {/* Back Navigation */}
        <Link to="/blog" className="back-nav">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="post-header">
          <div className="post-meta-top">
            <span className="post-category">{post.category}</span>
            <div className="post-meta-items">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{formatDate(post.publishDate)}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          
          <div className="author-info">
            <div className="author-avatar">
              {post.author.charAt(0)}
            </div>
            <div className="author-details">
              <span className="author-name">By {post.author}</span>
              <span className="author-role">Developer & Writer</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Post Content */}
        <div className="post-content">
          <div 
            className="content-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="post-tags">
            <div className="tags-title">
              <Tag size={18} />
              Tags
            </div>
            <div className="tags-list">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <h2 className="related-title">Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/post/${relatedPost.id}`} 
                  className="related-card"
                >
                  <div className="related-image">
                    <img src={relatedPost.image} alt={relatedPost.title} />
                  </div>
                  <div className="related-content">
                    <h3 className="related-post-title">{relatedPost.title}</h3>
                    <p className="related-excerpt">{relatedPost.excerpt}</p>
                    <div className="related-meta">
                      <span>{formatDate(relatedPost.publishDate)}</span>
                      <span>•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PostDetail;