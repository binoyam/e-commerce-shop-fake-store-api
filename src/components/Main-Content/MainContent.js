import "./MainContent.css";

function MainContent({ products }) {
  // console.log(products);

  function shortenText(description, limit) {
    if (description.length <= limit) {
      return description;
    }
    const slicedText = description.slice(0, limit);
    const lastSpaceIndex = slicedText.lastIndexOf(" ");

    if (lastSpaceIndex !== -1) {
      return slicedText.slice(0, lastSpaceIndex) + "...";
    }
    return slicedText + "...";
  }

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
          <p className="product-description">
          {shortenText(product.description, 100)}
          </p>
        </article>
      ))}
    </main>
  );
}

export default MainContent;
