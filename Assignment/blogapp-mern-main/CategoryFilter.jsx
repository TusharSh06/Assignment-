import './CategoryFilter.css';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-filter">
      <h3 className="filter-title">Categories</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              activeCategory === category ? 'category-button-active' : ''
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;