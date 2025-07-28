import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import "./style.css";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist:`, product.title);
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    console.log('Added to cart:', product.title);
    
    // Simulate API call
    setTimeout(() => {
      setIsAdding(false);
      alert(`${product.title} added to cart!`);
    }, 1500);
  };

  return (
    <div className="product-slide">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} className="product-img" />
          {product.badge && (
            <div className={`product-badge ${product.badgeClass}`}>
              {product.badge}
            </div>
          )}
          <button 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            style={{
              background: isWishlisted ? '#e53e3e' : 'rgba(255,255,255,0.9)',
              color: isWishlisted ? 'white' : '#2d3748'
            }}
          >
            <i className="fas fa-heart"></i>
          </button>
        </div>

        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-title">
            <a href="#">{product.title}</a>
          </h3>
          <div className="product-price">
            ${product.price}
            {product.originalPrice && (
              <span className="price-original">${product.originalPrice}</span>
            )}
          </div>
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas fa-star star ${i < product.rating ? "" : "empty"}`}
                ></i>
              ))}
            </div>
            <span className="rating-count">({product.reviews})</span>
          </div>
          <button 
            className="add-to-cart"
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            style={{
              background: isAdding ? '#48bb78' : (product.inStock ? '' : '#ccc'),
              opacity: isAdding ? 0.8 : 1
            }}
          >
            {isAdding ? 'Adding...' : (product.inStock ? 'Add to Cart' : 'Out of Stock')}
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from API...');
        setLoading(true);
        
        const data = await getProducts();
        console.log('API Response:', data);
        
        if (data.success) {
          setProducts(data.products);
          console.log('✅ Products loaded:', data.products.length);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        console.error('❌ Error loading products:', err);
        setError('Failed to connect to server. Make sure backend is running on http://localhost:5000');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="products-section" id="products">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Loading products from server...</p>
          <div style={{ marginTop: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section" id="products">
        <div className="section-title">
          <h2>Featured Products</h2>
          <div style={{
            background: '#fee',
            border: '1px solid #fcc',
            borderRadius: '8px',
            padding: '1rem',
            margin: '1rem auto',
            maxWidth: '500px',
            color: '#c33'
          }}>
            <p><strong>⚠️ Error:</strong> {error}</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Make sure your backend server is running at http://localhost:5000
            </p>
            <button 
              onClick={() => window.location.reload()} 
              style={{
                marginTop: '0.5rem',
                padding: '0.5rem 1rem',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products-section" id="products">
      <div className="section-title">
        <h2>Featured Products</h2>
        <p>Discover our handpicked selection of premium skateboard gear</p>
        <div style={{
          background: '#e8f5e8',
          border: '1px solid #4caf50',
          borderRadius: '4px',
          padding: '0.5rem 1rem',
          margin: '1rem auto',
          maxWidth: '400px',
          fontSize: '0.9rem',
          color: '#2e7d32'
        }}>
          ✅ Loaded {products.length} products from API
        </div>
      </div>

      <div className="product-carousel" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        margin: '0'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;