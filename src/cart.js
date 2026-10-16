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

  if (quantity === 0) {
    throw new RangeError('Нельзя купить товар количеством 0');
  }

  if (productInCart) {
    productInCart.quantity += quantity;
  } else {
    cart.push({ id, name, price, stock, quantity });
  }

  return cart;
}

function changeQuantity(cart, id, quantity) {
  const productInCart = cart.find((item) => item.id === id);
  const quantityInCart = productInCart ? productInCart.quantity : 0;
  const stock = productInCart ? productInCart.stock : 0;

  if (productInCart) {
    if (stock - quantityInCart < quantity) {
      throw new RangeError('Вы пытаетесь купить товара больше, чем у нас есть');
    }

    if (quantity === 0) {
      throw new RangeError('Нельзя купить товар количеством 0');
    }

    productInCart.quantity = quantity;
  }

  return cart;
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id !== id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, el) => (total += el.price * el.quantity), 0);
}

function calculateOrderTotal(cart, promocode) {
  const subtotal = calculateCartSubtotal(cart);
  const delivery =
    cart.reduce((sumQ, el) => sumQ + el.quantity, 0) < 2 ? 30000 : 0;
  const discount =
    promocode === 'SAVE10' && subtotal >= 20000 ? Math.floor(subtotal / 10) : 0;

  return {
    subtotal,
    discount,
    delivery,
    total: subtotal + delivery - discount,
  };
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
