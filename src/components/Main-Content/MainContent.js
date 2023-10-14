import { useState } from "react";
import "./MainContent.css";

function MainContent({ products }) {
  // console.log(products);
  const [expandedText, setExpandedText] = useState(null);

  const toggleExpand = (productId) => {
    if (expandedText === productId) {
      setExpandedText(null);
    } else {
      setExpandedText(productId);
    }
  };
  return (
    <main className="main-content">
      {products.map((product) => (
        <article className="product-box" key={product.id}>
          <h3 className="product-title">{product.title.slice(0, 20)}</h3>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <span className="product-price">${product.price}</span>

          {expandedText === product.id ? (
            <p className="product-description">{product.description}</p>
          ) : (
            <p className="product-description">
              {product.description.length > 100
                ? product.description.slice(0, 100) + "..."
                : product.description}
            </p>
          )}
          {product.description.length > 100 ? (
            <button
              className="expand-button"
              onClick={() => toggleExpand(product.id)}
            >
              {expandedText === product.id ? "Read Less" : "Read More"}
            </button>
          ) : null}
        </article>
      ))}
    </main>
  );
}

export default MainContent;
