import "./HomePage.css";

function HomePage({ products }) {
  // console.log(products);
  function renderStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    }

    if (halfStar) {
      stars.push(<span key={fullStars}>&#9733;&#189;</span>); // Half star
    }

    return stars;
  }
  return (
    <div className="home-page">
      <div className="home-page-header">
      <h1 className="home-header">Welcome to bt-shop!</h1>
      <p className="home-sub-header">Explore our wide range of products and start shopping today!</p>
      </div>
      <h1>Trending products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <span>{product.title.slice(0, 10)}</span>
            <div>{renderStarRating(product.rating.rate)}</div>
            <img className="img" src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
