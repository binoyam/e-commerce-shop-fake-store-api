import "./HomePage.css";

function HomePage({ products }) {
  console.log(products);
  return (
    <div className="home-page">
      <h1>Welcome to bt-shop</h1>
      <p>Explore our wide range of products and start shopping today</p>
      <div className="product-list">

      {products.map((product) => (
          <div key={product.id} className="product-card">
            <span>{product.title.slice(0,10)}</span>
          
            <img src={product.image} alt="" />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
