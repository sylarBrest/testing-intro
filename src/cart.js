function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  const { id, name, price, stock } = product;

  const productInCart = cart.find((item) => item.id === id);
  const quantityInCart = productInCart ? productInCart.quantity : 0;

  if (stock - quantityInCart < quantity) {
    throw new RangeError('Вы пытаетесь купить товара больше, чем у нас есть');
  }

  if (quantity <= 0) {
    throw new RangeError('Нельзя купить товар количеством 0');
  }

  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({ id, name, price, stock, quantity });
  }

  return cart;
}
function changeQuantity() {
  return notImplemented();
}
function removeFromCart() {
  return notImplemented();
}
function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
