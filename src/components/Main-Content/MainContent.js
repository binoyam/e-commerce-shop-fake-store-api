import React from "react";

function MainContent({ products }) {
  console.log(products);
  return (
    <main>
      {products.map((product) => (
        <article key={product.id}>
          <h1>{product.title}</h1>
        </article>
      ))}
    </main>
  );
}

export default MainContent;
