export const state = () => ({
  product: {
    symbol: null,
    accessory: null
  },
  cart: []
})

export const mutations = {
  addSymbol (state, symbol) {
    state.product.symbol = symbol
  },
  addAccessory (state, accessory) {
    state.product.accessory = accessory
  },
  addCart (state, item) {
    state.cart.push(item)
  },
  clear (state) {
    state.cart = []
    state.product = {
      symbol: null,
      accessory: null
    }
  }
}
