export default {
  state: {
    cartItems: []
  },
  mutations: {
    pushToCart(state, item) {
      state.cartItems.push(item)
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('pushToCart', item)
    }
  },
  getters: {
    cartItemCount(state) {
      return state.cartItems.length
    }
  },
  cartItems(state) {
    return state.cartItems
  }
}
