import React from 'react'

function MainContent(props) {
    log
  return (
    <main>
        {products.map((product) => (
        <article key={product.id}>
          <h1>{product.title}</h1>
        </article>
      ))}
    </main>
  )
}

export default MainContent