const cart = { items: [] }

const checkout = async () => {
  cart.items = []
  return cart
}

const addToCart = async pokemon => {
  let found = false
  cart.items.forEach(item => {
    if (item.pokemon.name.english === pokemon.name.english) {
      item.count += 1
      found = true
    }
  })
  if (!found) {
    cart.items.push({
      pokemon,
      count: 1
    })
  }
  return cart
}

const getCartItems = async () => {
  return cart
}

module.exports = {
  checkout,
  addToCart,
  getCartItems
}
