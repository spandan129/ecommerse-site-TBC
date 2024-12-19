// Product rendering functionality
export function renderProducts(products, container) {
  if (!container) return;
  
  container.innerHTML = products.map(product => `
    <div class="product-card">
      <a href="/product.html?id=${product.id}">
        <figure class="image">
          <img src="${product.image}" alt="${product.name}" class="product-image">
        </figure>
        <div class="p-4">
          <h3 class="title is-5">${product.name}</h3>
          <p class="subtitle is-6">$${product.price}</p>
          <p class="product-description">${product.description}</p>
        </div>
      </a>
    </div>
  `).join('');

}