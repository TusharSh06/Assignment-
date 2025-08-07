import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import './BlogCard.css';

const BlogCard = ({ post, featured = false }) => {
  const {
    id,
    title,
    excerpt,
    author,
    publishDate,
    category,
    readTime,
    image
  } = post;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className={`blog-card ${featured ? 'blog-card-featured' : ''}`}>
      <Link to={`/post/${id}`} className="blog-card-link">
        <div className="blog-card-image">
          <img src={image} alt={title} />
          <div className="blog-card-category">{category}</div>
        </div>
        
        <div className="blog-card-content">
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-excerpt">{excerpt}</p>
          
          <div className="blog-card-meta">
            <div className="meta-item">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="meta-item">
              <Calendar size={14} />
              <span>{formatDate(publishDate)}</span>
            </div>
            <div className="meta-item">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;