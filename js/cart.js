// Cart state management
const CART_STORAGE_KEY = 'modern_living_cart';

class Cart {
  constructor() {
    this.items = this.loadCart();
  }

  loadCart() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    this.updateCartIndicator();
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
    this.saveCart();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  updateCartIndicator() {
    const indicator = document.querySelector('.cart-indicator');
    if (indicator) {
      const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
      indicator.textContent = `Cart (${totalItems})`;
    }
  }
}

export const cart = new Cart();