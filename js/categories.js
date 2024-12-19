// Category rendering functionality
export function renderCategories(categories, container) {
  if (!container) return;
  
  container.innerHTML = categories.map(category => `
    <div class="column is-4">
      <a href="/category.html?id=${category.id}">
        <div class="category-card">
          <img src="${category.image}" alt="${category.name}" class="category-image">
          <h3 class="category-title">${category.name}</h3>
        </div>
      </a>
    </div>
  `).join('');

}