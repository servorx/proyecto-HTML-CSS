async function fetchProducts() {
  const res = await fetch('http://localhost:3000/main');
  const products = await res.json();

  const container = document.getElementById('product-list');
  container.innerHTML = "";

  products.forEach(product => {
    const article = document.createElement('article');
    article.classList.add('product');

    article.innerHTML = `
      <figure class="imagen-product">
        <img src="./assets/${product.favorite ? 'icon-heart-active.svg' : 'icon-heart.svg'}" 
             alt="corazón" 
             class="heart"> 
        <img src="${product.imagen}" alt="${product.title}" class="image">
      </figure>
      <div>
        <h2>${product.title}</h2>
        <p>${product.category}</p>
        <p>${product.price}</p>
        <p><img src="storage/img/index/icon-star.png" alt="star">${product.rating}</p>
      </div>
    `;

    container.appendChild(article);
  });
}

fetchProducts();
